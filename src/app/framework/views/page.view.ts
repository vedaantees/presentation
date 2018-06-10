import { Component, OnInit, ViewEncapsulation, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagingService } from '../message-bus/messaging.service';

@Injectable()
export class PageView implements OnInit
{
    constructor(private activatedRoute: ActivatedRoute, private messagingService: MessagingService<PageSetting>) { }

    ngOnInit() 
    {
        this.messagingService.sendMessage({ 
                                                title: this.activatedRoute.snapshot.data["title"],
                                                module: this.activatedRoute.snapshot.data["module"]
                                          } as PageSetting);
    }
  
}

export interface PageSetting
{
    module:string;
     title:string;
}