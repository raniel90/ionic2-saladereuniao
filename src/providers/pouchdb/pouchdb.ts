import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import pouchDBFind from 'pouchdb-find';

@Injectable()
export class PouchdbProvider {

  private _db;
  private _dbName = "meeting.db"
  private _nameAdapter = "websql"

  constructor(private platform: Platform) {

    if(this.platform.is("android")) {
      this._nameAdapter = "sqlite"
    }

    this.initDB()
  }

  initDB() {

    try {
      PouchDB.plugin(cordovaSqlitePlugin);
      PouchDB.plugin(pouchDBFind);
      this._db = new PouchDB(this._dbName, { adapter: this._nameAdapter })
    } catch (err) {
      console.log("ERRO AO INICIALIZAR BD: " + JSON.stringify(err))
    }
  }

  async insert(document: any) {
    try {
      return await this._db.put(document);
    } catch (err) {
      if (err.status == 409) {
        this.update(document)
      }
    }
  }

   async insertAll(documents: any[]) {
    try {
      return await this._db.bulkDocs(documents);
    } catch (err) {
      console.log(err)
    }
  }

  async update(document) {
    try {
      if (document._id != null) {
        let docExisting = await this._db.get(document._id);
        if (docExisting != null) {
          document._rev = docExisting._rev
          return await this._db.put(document);
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  async remove(tableName: string, _id: any){
    try {
      let doc = await this._db.get(tableName + "_" + _id);
      return await this._db.remove(doc);
    } catch (err) {
      console.log(err);
    }
  }

  async removeToken(tableName: string) {
    try {
      let doc = await this._db.get(tableName);
      return await this._db.remove(doc);
    } catch (err) {
      console.log(err);
    }
  }


  async removeByDocAndRevision(tableName: string, _id: any, _rev: string) {
    try {
      return await this._db.remove(tableName + "_" + _id._rev);
    } catch (err) {
      console.log(err);
    }
  }

  async findAll(tableName: string) {
    try {
      return await this._db.allDocs({
        include_docs: true,
        attachments: false,
        startkey: tableName,
        endkey: tableName + '\uffff'
      });
    } catch (err) {
      console.log(err);
    }
  }

  async findById(tableName: string, _id: any) {
    try {
      return await this._db.get(tableName + "_" + _id);
    } catch (err) {
      return err
    }
  }

  async findToken(tableName: any) {
    try {
      return await this._db.get(tableName);
    } catch (err) {
      console.log(err);
    }
  }

  async findAllWithPagination2(tableName: string, first: number, max: number) {

    try {
      return await this._db.allDocs({
        include_docs: true,
        attachments: false,
        startkey: tableName,
        endkey: tableName + '\uffff',
        skip: first * max - max,
        limit: max
      });
    } catch (err) {
      console.log(err);
    }
  }

  async findAllWithPagination(tableName: string, first: number, max: number) {
    try {
      return await this._db.query(function (doc, emit) {
        emit(doc._id);
      }, {
          startkey: tableName,
          endkey: tableName + '\uffff',
          include_docs: true,
          skip: first,
          limit: max,
          descending: true
        });
    } catch (err) {
      console.log(err)
    }
  }
}
