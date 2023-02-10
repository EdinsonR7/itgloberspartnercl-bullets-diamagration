import React from 'react'
import { Link } from 'vtex.render-runtime'
import { LinkProps } from './BulletTypes'
import { useCssHandles } from 'vtex.css-handles'

import "./styles.css"

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
  price:number
}

const Bullet = ({src, titleBullet, link, price}: Props) => {
  const CSS_HANDLES = [
    "bullet__item",
    "bullet__item--title",
    "bullet__item--image",
    "bullet__item--link",
    "bullet__item--price"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`pt1 pl5 ${handles["bullet__item"]}`}>
      <Link
        to = {link.url}
        className = {handles["bullet__item--link"]}
      >
        <img className={`${handles["bullet__item--image"]}
         externalClass`}src={src} alt={titleBullet} />
        <p className={handles["bullet__item--title"]}>{titleBullet} </p>
      </Link>
      <p className={handles["bullet__item--price"]}>${price}</p>
    </div>
  )
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties:{
    src: {
      title: "Imagen de Bullet",
      type: "string",
      widget:{
        "ui:widget":"image-uploader"
      }
    }
  }
}

export default Bullet
