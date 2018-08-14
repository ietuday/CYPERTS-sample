import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    {id: 0, text: ` You're now friend with John`},
    {id: 1, text: `John Likes your tweet`},
    {id: 2, text: ` You'll never believe what John said`}
  ];

  
  constructor() { }

  update(id, text){
    this.messages = this.messages.map(m =>
      m.id === id 
      ? { id, text } 
      : m
    )
    console.log(this.messages)
  }

}
