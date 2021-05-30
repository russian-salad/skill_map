import React from 'react'
import Search from 'components/search'
import Button from 'components/button'
import s from 'pages/homePage/homepage.module.css'
import Pagination from "components/pagination";


    function SkillCard(props) {
            //  const { emblemUrl, id, code, name, area } = props.card;
                return (
                //   <Link
                //     to={{
                //       pathname: props.type + "/" + id,
                //     }}
                //   >
                    <div className={s.card}>
                      {/* <div className="content"> */}
                        {/* <div className="card-img">
                          <img src={emblemUrl || leagueLogo[code]} alt={name} />
                        </div> */}
                        <div className="card-info">
                          <h3>Load</h3>
                          <p>load</p>
                        </div>
                      {/* </div> */}
                    </div>
                //   {/* </Link> */}


        )
    }
export default function HomePage (props) {
    return(
        <>
         <div className={s.search}>
             <Search/>
             <Button text='Найти'/>
         </div>
         <div className={s.flex}>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
         </div>
         <div style={{display:'flex',justifyContent:'center',margin:10}}>
                <Pagination/>
         </div>
        </>
    )
}