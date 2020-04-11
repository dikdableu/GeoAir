import React from 'react';
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

class DBLocal {
  constructor() {
    this.items = []
  }
}
  export function createDB() {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists Favoris (id int(6) primary key not null auto_increment, villes varchar(250) not null , pays varchar(10) not null, latitude decimal(9,6) not null, longitude decimal(9,6) not null);", [], (_, { rows: { _array } }) => this.items = _array, (e) => console.log(e))
    }, (e) => {console.log(e)});
  };

  export function listFavoris() {
    db.transaction(tx => {
      tx.executeSql(
        `select * from Favoris`,[],
        (_, { rows: { _array } }) => this.items = _array, (e) => console.log(e))
    });
  }

  export function deleteFavoris(id) {
    db.transaction(tx => {
      tx.executeSql(
        `delete from Favoris where id = ?`,
        [id])
      })
    }

  export function insertFavoris(villes, pays, latitude, longitude) {
    db.transaction(tx => {
      tx.executeSql(
        `insert into Favoris(villes, pays, latitude, longitude) values(?, ?, ?, ?)`, [villes, pays, latitude, longitude], (_, { rows: { _array } }) => this.items = _array, (e) => console.log(e))
  })
}
