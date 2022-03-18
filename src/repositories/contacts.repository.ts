import { Contacts } from "../models/contacts.model";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Contacts)
export class ContactsRepository extends Repository<Contacts> {

    async getContactByDocumentId(documentId: string) {
        return await this.findOne({ where: { documentId } })
    }
    async getAllContacts() {
        return await this.find({});
    }
}