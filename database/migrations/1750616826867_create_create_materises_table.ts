import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'materis'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('kursus_id').unsigned().references('id').inTable('kursuses').onDelete('CASCADE')
      table.string('judul').notNullable()
      table.text('deskripsi').nullable()
      table.string('file_path').notNullable() // Path ke file yang diupload
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
