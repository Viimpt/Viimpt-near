mod models;
mod utils;

use std::convert::TryInto;

use crate::{
    utils::{
        AccountId,
    },
    models::{
        Event
    }
};

use near_sdk::{borsh::{self, BorshDeserialize, BorshSerialize}};
#[allow(unused_imports)]
use near_sdk::{env, PromiseIndex, near_bindgen};
near_sdk::setup_alloc!();


#[near_bindgen]
#[derive(Clone, Default, BorshDeserialize, BorshSerialize)]

pub struct Contract {
    owner: AccountId,
    events: Vec<Event>,
}

#[near_bindgen]
impl Contract{
    #[init]
    pub fn new(
        owner: AccountId,
    ) -> Self{
        let events: Vec<Event> = Vec::new();

        Contract{
            owner,
            events
        }
    }

    pub fn add_event(&mut self, title: String, estimated_budget: u128, description: String) {
        
        let id = self.events.len() as i32;
        
        self.events.push(Event::new(
            id,
            title,
            estimated_budget,
            description
        ));

        env::log("Added a new event!".as_bytes());
    }

    pub fn list_events(&self) -> Vec<Event> {
        let events = &self.events;

       return events.to_vec();
    }

    pub fn event_count(&mut self) -> usize {
        return self.events.len();
    }

    pub fn add_vote(&mut self, id:usize){
        let event: &mut Event = self.events.get_mut(id).unwrap();
        let voter = env::predecessor_account_id();

        event.total_votes = event.total_votes + 1;
        env::log("Vote submitted successfully for this event!".as_bytes());
        event.votes.push(voter.to_string());
        
    }

    pub fn get_total_votes(&mut self, id:usize) -> u64 {
        let event: &mut Event = self.events.get_mut(id).unwrap();
        return event.total_votes.try_into().unwrap();

    }
}