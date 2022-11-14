import { useEffect, useRef, useState } from 'react';
import { SvgPlant, ZamiaGenus, BushyPlantGenus, DragonTreeGenus, PileaGenus } from 'svg-plant';

const Bushy = (seedd) => {
    const svg = useRef(null)
    const [s, setS] = useState(seedd)

    useEffect(() => {
        const seed = s
        const genus = new BushyPlantGenus( seed )
        const cfg = {
            color: true,    // Boolean
            age: 0.5,         // Float [0,1]
            potSize: .3,    // Float [0,1]
            potPathAttr: {  // Object
                fill: '#123456',
                stroke: '#111111',
            },
        };
        const plant = new SvgPlant( genus,cfg )
        const bushy = plant.svgElement;
        plant.animate( 0, 1, 3000 );

        svg.current.append(bushy)
    },[])
    return(
        <div>
            <div ref={svg} style={{width: "150px"}} />
        </div>
    )
}
export default Bushy