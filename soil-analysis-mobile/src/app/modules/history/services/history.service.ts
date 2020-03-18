import { Injectable } from '@angular/core';
import { Result } from '../models/results.model';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  results: Result[] = [
    {
      id: 230,
      created: 'Tue Mar 17 2020 15:26:33 GMT+0300',
      device: 12,
      user: 'Eric Chingalo',
      results: [
        {
          parameter: 'pH',
          value: 6.7,
        },
        {
          parameter: 'moisture',
          value: 78.7,
        },
        {
          parameter: 'temperature',
          value: 35.6,
        },
      ],
    },

    {
      id: 423,
      created: 'Tue Mar 17 2020 7:49:53 GMT+0300',
      device: 12,
      user: 'Eric Chingalo',
      results: [
        {
          parameter: 'pH',
          value: 13.7,
        },
        {
          parameter: 'moisture',
          value: 98.7,
        },
        {
          parameter: 'temperature',
          value: 20.6,
        },
      ],
    },

    {
      id: 430,
      created: 'Tue Mar 17 2020 13:37:33 GMT+0300',
      device: 12,
      user: 'Eric Chingalo',
      results: [
        {
          parameter: 'pH',
          value: 3.2,
        },
        {
          parameter: 'moisture',
          value: 50.7,
        },
        {
          parameter: 'temperature',
          value: 38.3,
        },
      ],
    },

    {
      id: 20,
      created: 'Tue Mar 17 2020 10:06:50 GMT+0300',
      device: 12,
      user: 'Eric Chingalo',
      results: [
        {
          parameter: 'pH',
          value: 7.5,
        },
        {
          parameter: 'moisture',
          value: 67.5,
        },
        {
          parameter: 'temperature',
          value: 30.0,
        },
      ],
    },
  ];
  constructor() {}
}
