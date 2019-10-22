import { Meteor } from 'meteor/meteor';
import {Count} from "../imports/api/count";

Meteor.startup(() => {
  if(Count.find().count() <= 0) {
    Count.insert({
      count: 0, 
    })
  }
})

