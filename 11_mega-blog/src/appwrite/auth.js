import conf from "../config"
import { Client, Account, ID } from "appwrite"

export class AuthService {
  client = new Client()
  account

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.account = new Account(this.client)
  }

  // Create Account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      )

      if (userAccount) {
        // Direct to Login
        return this.login({ email, password })
      } else {
        return userAccount
      }
    } catch (error) {
      throw error
    }
  }

  // Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password)
    } catch (error) {
      console.log("Appwrite :: Auth:login :: error", error)
    }
  }

  // Get Current User
  async getcurrentUser() {
    try {
      return await this.account.get()
    } catch (error) {
      console.log("Appwrite :: Auth:getCurrentUser :: error", error)
    }

    return null
  }

  // Logout
  async logout() {
    try {
      await this.account.deleteSession("current")
    } catch (error) {
      console.log("Appwrite :: Auth:logout :: error", error)
    }
  }
}

const authService = new AuthService()

export default authService
