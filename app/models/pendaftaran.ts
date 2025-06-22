import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Kursus from '#models/kursus'
import User from '#models/user'

export default class Pendaftaran extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare kursusId: number

  @column()
  declare userId: number // Sebagai pesertaId

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Kursus)
  declare kursus: BelongsTo<typeof Kursus>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}