import { useEffect, useRef, useState } from 'react';
import { SvgPlant, ZamiaGenus, BushyPlantGenus, DragonTreeGenus, PileaGenus } from 'svg-plant';

const Pilea = ({seedd}) => {
    const svg = useRef(null)
    //const [s,setS] = useState(seedd)

    useEffect(() => {
        //const seed = s
        const genus = new PileaGenus( seedd )
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
        const pilea = plant.svgElement;
        plant.animate( 0, 1, 3000 );

        svg.current.append(pilea)
    },[])
    return(
        <div>
            <div ref={svg} style={{width: "75px",height: "100px"}} />
        </div>
    )
}
export default Pilea