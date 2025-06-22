import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Instruktur from '#models/instruktur'
import Pendaftaran from '#models/pendaftaran'
import Materi from '#models/materi'

export default class Kursus extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare namaKursus: string

  @column()
  declare durasi: string

  @column()
  declare biaya: number

  @column()
  declare instrukturId: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Instruktur)
  declare instruktur: BelongsTo<typeof Instruktur>

  @hasMany(() => Pendaftaran)
  declare pendaftarans: HasMany<typeof Pendaftaran>

  @hasMany(() => Materi)
  declare materis: HasMany<typeof Materi>
}