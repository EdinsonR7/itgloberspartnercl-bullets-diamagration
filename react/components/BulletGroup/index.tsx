import React, { PropsWithChildren } from 'react'
import { useListContext,ListContextProvider  } from 'vtex.list-context'
import { BulletsSchema } from './BulletTypes'
import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'
import { getBulletsAsTSXList } from './modules/bulletsAsList'

export interface BulletGroupProps {
    bullets: BulletsSchema
}
const BulletGroup = ({
    bullets

}: PropsWithChildren<BulletGroupProps>) => {
    const { isMobile } = useDevice();
    const { list } = useListContext() || []

    console.log("Bullets", bullets)

    const bulletsGroup = getBulletsAsTSXList(bullets);
    const newListContextValue = list.concat(bulletsGroup)

    const CSS_HANDLES = ["bullet__container"]
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <ListContextProvider list={newListContextValue}>
            {
            isMobile
            ?
            <div className={handles.bullet__container}>

            </div>
            :
             <div className={handles.bullet__container}>
              {bulletsGroup}
            </div>
            }
        </ListContextProvider>
    )
}
export default BulletGroup
