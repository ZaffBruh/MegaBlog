import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    Client = new Client()
    Account
}

const authService = new AuthService()

export default authService