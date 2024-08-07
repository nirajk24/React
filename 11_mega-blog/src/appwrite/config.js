import conf from "../config/conf"
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service {
  client = new Client()
  databases
  bucket

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)

    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  // Create Post
  async createPost({ title, slug, content, featuredimage, status, userid }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
          userid,
        }
      )
    } catch (error) {
      console.log("Appwrite :: config:createPost :: error", error)
    }
  }  

  // Update Post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      )
    } catch (error) {
      console.log("Appwrite :: config:updatePost :: error", error)
    }
  }

  // Delete Post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true
    } catch (error) {
      console.log("Appwrite :: config:deletePost :: error", error)
      return false
    }
  }

  // Get Single Post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log("Appwrite :: config:getPost :: error", error)
      return false
    }
  }

  // Get all Posts
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      )
    } catch (error) {
      console.log("Appwrite :: config:getPosts :: error", error)
      return false
    }
  }

  // Upload Images
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log("Appwrite :: config:uploadFile :: error", error)
    }
  }

  // Delete Images
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true
    } catch (error) {
      console.log("Appwrite :: config:deleteFile :: error", error)
      return false
    }
  }

  // Get File Preview
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }
}

const service = new Service()

export default service
