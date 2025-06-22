import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'kursuses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nama_kursus').notNullable()
      table.string('durasi').notNullable()
      table.decimal('biaya').notNullable()
      table
        .integer('instruktur_id')
        .unsigned()
        .references('id')
        .inTable('instrukturs')
        .onDelete('SET NULL') // Jika instruktur dihapus, kursus tidak ikut terhapus
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
