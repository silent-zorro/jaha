import { MessageType } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IPackage, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'fed',
            description: 'Engineering Drawing',
            category: 'misc',
            usage: `Zoom Link`,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const pkg: IPackage = require(join(__dirname, '..', '..', '..', 'package.json'))
        const image = this.client.assets.get('fed')
        if (!image) return void null
        return void M.reply(
            image,
            MessageType.image,
            undefined,
            undefined,
            `āļø *AMT* āļø\n\nš  *Description: Foundation-Engineering Drawing by Mr.Chathura Jayasekara*\n\nš *LINK: https://learn.zoom.us/j/64900636413?pwd=K2M3VGpJZkRhblhrRHlIZUcxQVRtZz09*\n`
        )
    }
}
