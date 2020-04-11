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
        "create table if not exists Favoris (id INTEGER PRIMARY KEY AUTOINCREMENT, villes text not null UNIQUE, pays text not null, latitude decimal(9,6) not null, longitude decimal(9,6) not null);", [], (_, { rows: { _array } }) => this.items = _array, (transaction, e) => console.log(e))
    }, (transaction, e) => console.log(e));
  };

  export function listFavoris() {
    var result
    db.transaction(tx => {
      tx.executeSql(
        `select * from Favoris`,[],
        (_, { rows: { _array } }) => this.items = _array, (transaction, e) => console.log(e))
    });
    return this.items
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
        `insert into Favoris(villes, pays, latitude, longitude) values(?, ?, ?, ?)`, [villes, pays, latitude, longitude], (_, { rows: { _array } }) => console.log(_array), (transaction, e) => console.log(e))
  })
  console.log(this)
}
