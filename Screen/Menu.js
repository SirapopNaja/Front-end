import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from './Screen/ManageQueue';
import Tab2 from './Screen/petition';
import Tab3 from './Screen/Give_away_card';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="จัดการคิว">
            <Tab1 />
          </Tab>
          <Tab heading="คำร้อง">
            <Tab2 />
          </Tab>
          <Tab heading="แจกบัตร">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}