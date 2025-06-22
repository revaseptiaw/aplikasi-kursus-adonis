import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pendaftarans'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('kursus_id').unsigned().references('id').inTable('kursuses').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE') // user_id sebagai peserta_id
      table.string('status').defaultTo('terdaftar')
      table.unique(['kursus_id', 'user_id']) // Validasi agar tidak bisa daftar kursus yang sama
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
