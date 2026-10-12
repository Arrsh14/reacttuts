import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
    { companyName: 'Meta', post: 'Frontend Engineer', tag1: 'Full Time', tag2: 'Junior Level', pay: '65/hour', brandlogo: 'https://www.google.com/s2/favicons?domain=meta.com&sz=128' ,dateposted:'5 days ago'},
    { companyName: 'Amazon', post: 'Backend Developer', tag1: 'Full Time', tag2: 'Mid Level', pay: '70/hour', brandlogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdwt2YUNELX0njp3ZhuQJMOsvZ9t7IJlIh1HVDcPgcA&s' ,dateposted:'10 days ago'},
    { companyName: 'Apple', post: 'iOS Developer', tag1: 'Part Time', tag2: 'Senior Level', pay: '75/hour', brandlogo: 'https://www.google.com/s2/favicons?domain=apple.com&sz=128' ,dateposted:'21 days ago'},
    { companyName: 'Netflix', post: 'Machine Learning Engineer', tag1: 'Full Time', tag2: 'Senior Level', pay: '80/hour', brandlogo: 'https://www.google.com/s2/favicons?domain=netflix.com&sz=128 ',dateposted:'30 days ago'},
    { companyName: 'Google', post: 'Cloud Solutions Architect', tag1: 'Full Time', tag2: 'Mid Level', pay: '85/hour', brandlogo: 'https://www.google.com/s2/favicons?domain=google.com&sz=128',dateposted:'39 days ago' },
    { companyName: 'Microsoft', post: 'Data Scientist', tag1: 'Full Time', tag2: 'Junior Level', pay: '100/hour', brandlogo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128',dateposted:'40 days ago' },
    { companyName: 'IBM', post: 'AI Research Engineer', tag1: 'Full Time', tag2: 'Senior Level', pay: '90/hour', brandlogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSkBwIg8FnTVdq-lA1bnuZm4nQETFJsrp_OYpKrWhthjGhGdX1CCPqi_vx&s=10',dateposted:'2 days ago' },
    { companyName: 'Tesla', post: 'Embedded Systems Engineer', tag1: 'Full Time', tag2: 'Mid Level', pay: '95/hour', brandlogo: 'https://www.google.com/s2/favicons?domain=tesla.com&sz=128',dateposted:'90 days ago' },
    { companyName: 'JaneStreet', post: 'Quant Researcher', tag1: 'Full Time', tag2: 'High Level', pay: '150/hour', brandlogo: 'https://www.google.com/s2/favicons?domain=janestreet.com&sz=128' ,dateposted:'45 days ago'},
  ]

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, index) {
        return (
          <Card
            key={index}
            company={elem.companyName}
            post={elem.post}
            dateposted={elem.dateposted}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            brandlogo={elem.brandlogo}
          />
        )
      })}
    </div>
  )
}

export default App