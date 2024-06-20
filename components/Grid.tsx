import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id= "about">
        <BentoGrid>
            {[{title: "Title1", description: "Desc11", id: 1}
            ,{title: "Title2", description: "Desc12", id: 2}
            ,{title: "Title3", description: "Desc13", id: 3}
            ,{title: "Title4", description: "Desc14", id: 4}]
            .map((item) => (
                <BentoGridItem 
                    key={item.id}
                    id= {item.id}
                    title={item.title}
                    description={item.description}
                 />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid