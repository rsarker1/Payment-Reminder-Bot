import { it, jest, test, expect } from '@jest/globals'
import { ChatInputCommandInteraction } from 'discord.js'
import { addUser } from '../src/commands/addUser'

let mockInteraction: Partial<ChatInputCommandInteraction>

mockInteraction = {
  options: {
    getUser: jest.fn().mockReturnValue({ id: '1', username: 'Mock User' }),
    getInteger: jest.fn<(optionName: string) => number | null>().mockImplementation((optionName: string) => {
      switch (optionName) {
        case 'init-amount':
          return 30
        case 'rate':
          return 3
        case 'freq':
          return 1
        default:
          return null
      }
    }),
    getString: jest.fn<(optionName: string) => string | null>().mockImplementation((optionName: string) => {
      return optionName === 'date' ? '01-01-2025' : null
    }),
  },
  reply: jest.fn().mockResolvedValue(String as never)
} as any

it('replies with "Test" when date is valid', async () => {
  const command = new addUser()
  await command.execute(mockInteraction as ChatInputCommandInteraction)
  expect(mockInteraction.reply).toHaveBeenCalledWith('Test')
})

it('replies with "BROKEN" when date is invalid', async () => {
  (mockInteraction.options!.getString as jest.Mock).mockReturnValue('invalid-date')
  const command = new addUser()
  await command.execute(mockInteraction as ChatInputCommandInteraction)
  expect(mockInteraction.reply).toHaveBeenCalledWith('BROKEN')
})