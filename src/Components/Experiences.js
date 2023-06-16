import Images from "../Images";

const Experiences = ({mode}) => {
    
    const listExepriences = [
        {
          image : Images.elr12_logo,
          name  : "Elr12",
          title : "Full Stack Enginner",
          mission : " Design and Implementation of a Project Management Application.",
          description : "I developed a custom web-based project management application for a company, providing an end-to-end solution for planning, collaborating, and overseeing projects. With an intuitive and user-friendly interface, team members can easily track tasks, deadlines, and budgets while staying informed of real-time updates. This application has enabled productivity optimization and improved communication among team members, resulting in more efficient and effective project delivery.",
          period : "Jul. 2022 - août 2022 · 2 month",
          technologies : ["java","spring boot","mongodb","react js","redux","git","github","uml"]
        },
        {
          image : Images.logo_fst,
          name  : "Faculty of Sciences and Techniques of Fes",
          title : "Full Stack Enginner",
          mission : "Development and design of a web platform for Moroccan heritage management",
          description : "This end-of-studies project, carried out within the LSIA (laboratory Intelligent Systems and applications), had as its objective , the implementation of a management system for the  Moroccan cultural heritage. This system aims to automate the registration, querying and accessing information mainly concerning the categories of the following heritage: historic buildings, archaeological sites and cultural objects. " ,
          period : "mai 2021 - Jun 2021 · 2 month",
          technologies : ["php","laravel","js","jquery","mysql","uml"]
        },
      ];

    const RenderExperience = ({item}) => {
      return (
        <div className="formation-item">
              <div className="item-title ">
                  <div className={`${mode==1 ? 'light-border-blue' : ''} image-container`}>
                      <img src={item.image}  className=""/>
                  </div>
                  <div className="item-university-info">
                    <span className={`${mode==1 ? 'text-light' : ''} `}>
                      {item.name} | {item.title}
                    </span>
                    <span>{item.period}</span>
                  </div>
              </div>
              <div className="item-diplome-info">
             
                  <span className={`${mode==1 ? 'text-light' : ''} `}> 
                    <i className={`${mode==1 ? 'light-border-blue' : ''} fa fa-angle-right `}></i>
                    {item.mission}
                  </span>
                  <div className="experience-description ">
                     {item.description}
                  </div>
                  <div className="list-specialities">
                      {
                        item?.technologies?.map((technoogy,index)=>(
                            <div  key={index}><span className={`${mode==1 ? 'light-blue' : ''} `}>{technoogy}</span></div>                        
                        ))
                      }
                  </div>
              </div>
        </div>
      )
    }

    const RenderExperiences = () => {
      return (
            <div className="bodysecond-right">
                <div className="body-title item-title">
                    <img src={Images.experience_icon} className={`${mode==1 ? 'light-border-blue' : ''} `} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Experiences  </span>
                </div>
                <div className="list-formations">
                  {
                    listExepriences.map((item,index)=>(
                      <RenderExperience item={item} key={index}/>
                    ))
                  }
                </div>
            </div>
      )
    }

    return (
      <div className="bodysecond-container">
            {/*  */}
            <RenderExperiences />
            <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
      </div>
    )
  }

  export default Experiences ; 