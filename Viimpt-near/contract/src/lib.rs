/*
 * Example smart contract written in RUST
 *
 * Learn more about writing NEAR smart contracts with Rust:
 * https://near-docs.io/develop/Contract
 *
 */

use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::json_types::{U128, U64};
use near_sdk::{env, near_bindgen, AccountId, Balance, EpochHeight};
use std::collections::HashMap;

#[global_allocator]
static ALLOC: near_sdk::wee_alloc::WeeAlloc = near_sdk::wee_alloc::WeeAlloc::INIT;

type WrappedTimestamp = U64;

/// Voting contract for unlocking transfers. Once the majority of the stake holders agree to
/// unlock transfer, the time will be recorded and the voting ends.
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct VotingContract {
    /// How much each validator votes
    votes: HashMap<AccountId, Balance>,
    /// Total voted balance so far.
    total_voted_stake: Balance,
    /// When the voting ended. `None` means the poll is still open.
    result: Option<WrappedTimestamp>,
    /// Epoch height when the contract is touched last time.
    last_epoch_height: EpochHeight,
}

// Define the default, which automatically initializes the contract
impl Default for VotingContract {
    fn default() -> Self {
        env::panic(b"Voting contract should be initialized before usage")
    }
}

#[near_bindgen]
impl VotingContract {
    #[init]
    pub fn new() -> Self {
        assert!(!env::state_exists(), "The contract is already initialized");
        VotingContract {
            votes: HashMap::new(),
            total_voted_stake: 0,
            result: None,
            last_epoch_height: 0,
        }
    }

     /// Ping to update the votes according to current stake of validators.
     pub fn ping(&mut self) {
        assert!(self.result.is_none(), "Voting has already ended");
        let cur_epoch_height = env::epoch_height();
        if cur_epoch_height != self.last_epoch_height {
            let votes = std::mem::take(&mut self.votes);
            self.total_voted_stake = 0;
            for (account_id, _) in votes {
                let account_current_stake = env::validator_stake(&account_id);
                self.total_voted_stake += account_current_stake;
                if account_current_stake > 0 {
                    self.votes.insert(account_id, account_current_stake);
                }
            }
            self.check_result();
            self.last_epoch_height = cur_epoch_height;
        }
    }

    /// Returns `true` if the contract state exists and `false` otherwise.
pub fn state_exists() -> bool {
    storage_has_key(STATE_KEY)
}

/// Voting contract for unlocking transfers. Once the majority of the stake holders agree to
/// unlock transfer, the time will be recorded and the voting ends.
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct VotingContract {
    /// How much each validator votes
    votes: HashMap<AccountId, Balance>,
    /// Total voted balance so far.
    total_voted_stake: Balance,
    /// When the voting ended. `None` means the poll is still open.
    result: Option<WrappedTimestamp>,
    /// Epoch height when the contract is touched last time.
    last_epoch_height: EpochHeight,
}

/// Method for validators to vote or withdraw the vote.
    /// Votes for if `is_vote` is true, or withdraws the vote if `is_vote` is false.
    pub fn vote(&mut self, is_vote: bool) {
        self.ping();
        if self.result.is_some() {
            return;
        }
        let account_id = env::predecessor_account_id();
        let account_stake = if is_vote {
            let stake = env::validator_stake(&account_id);
            assert!(stake > 0, "{} is not a validator", account_id);
            stake
        } else {
            0
        };
        let voted_stake = self.votes.remove(&account_id).unwrap_or_default();
        assert!(
            voted_stake <= self.total_voted_stake,
            "invariant: voted stake {} is more than total voted stake {}",
            voted_stake,
            self.total_voted_stake
        );
        self.total_voted_stake = self.total_voted_stake + account_stake - voted_stake;
        if account_stake > 0 {
            self.votes.insert(account_id, account_stake);
            self.check_result();
        }
    }

    /// The id of the account that owns the current contract.
pub fn current_account_id() -> AccountId {
    assert_valid_account_id(method_into_register!(current_account_id))
}

/// The id of the account that either signed the original transaction or issued the initial
/// cross-contract call.
pub fn signer_account_id() -> AccountId {
    assert_valid_account_id(method_into_register!(signer_account_id))
}

/// The public key of the account that did the signing.
pub fn signer_account_pk() -> PublicKey {
    PublicKey::try_from(method_into_register!(signer_account_pk)).unwrap_or_else(|_| abort())
}

/// The id of the account that was the previous contract in the chain of cross-contract calls.
/// If this is the first contract, it is equal to `signer_account_id`.
pub fn predecessor_account_id() -> AccountId {
    assert_valid_account_id(method_into_register!(predecessor_account_id))
}

/// Check whether the voting has ended.
fn check_result(&mut self) {
    assert!(
        self.result.is_none(),
        "check result is called after result is already set"
    );
    let total_stake = env::validator_total_stake();
    if self.total_voted_stake > 2 * total_stake / 3 {
        self.result = Some(U64::from(env::block_timestamp()));
    }
}

/// Get the timestamp of when the voting finishes. `None` means the voting hasn't ended yet.
pub fn get_result(&self) -> Option<WrappedTimestamp> {
    self.result.clone()
}

/// Returns current a pair of `total_voted_stake` and the total stake.
/// Note: as a view method, it doesn't recompute the active stake. May need to call `ping` to
/// update the active stake.
pub fn get_total_voted_stake(&self) -> (U128, U128) {
    (
        self.total_voted_stake.into(),
        env::validator_total_stake().into(),
    )
}

/// Returns all active votes.
/// Note: as a view method, it doesn't recompute the active stake. May need to call `ping` to
/// update the active stake.
pub fn get_votes(&self) -> HashMap<AccountId, U128> {
    self.votes
        .iter()
        .map(|(account_id, stake)| (account_id.clone(), (*stake).into()))
        .collect()
}
}

/*
// Define the default message
const DEFAULT_MESSAGE: &str = "Hello";

// Define the contract structure
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Contract {
    message: String,
}

// Define the default, which automatically initializes the contract
impl Default for Contract{
    fn default() -> Self{
        Self{message: DEFAULT_MESSAGE.to_string()}
    }
}

// Implement the contract structure
#[near_bindgen]
impl Contract {
    // Public method - returns the greeting saved, defaulting to DEFAULT_MESSAGE
    pub fn get_greeting(&self) -> String {
        return self.message.clone();
    }

    // Public method - accepts a greeting, such as "howdy", and records it
    pub fn set_greeting(&mut self, message: String) {
        // Use env::log to record logs permanently to the blockchain!
        log!("Saving greeting {}", message);
        self.message = message;
    }
}
*/

/*
 * The rest of this file holds the inline tests for the code above
 * Learn more about Rust tests: https://doc.rust-lang.org/book/ch11-01-writing-tests.html
 */
 /*
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn get_default_greeting() {
        let contract = Contract::default();
        // this test did not call set_greeting so should return the default "Hello" greeting
        assert_eq!(
            contract.get_greeting(),
            "Hello".to_string()
        );
    }

    #[test]
    fn set_then_get_greeting() {
        let mut contract = Contract::default();
        contract.set_greeting("howdy".to_string());
        assert_eq!(
            contract.get_greeting(),
            "howdy".to_string()
        );
    }
}
*/