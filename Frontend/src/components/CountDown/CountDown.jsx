import React from 'react'
import CountUp from 'react-countup';

const CountDown = () => {
  return (
    <div>
<h1 className='text-center'>#NITICHETNA / #SCHEMESFORYOU</h1>
<div className='flex justify-evenly  mt-24'>

<div>
<h1><CountUp
end={100}
duration={5}
/> L</h1>
<h3>Lac</h3>
<span>children and</span>
<br />
<span>their families are</span>
<br />
<span>impacted every year</span>

</div>
<div>
<h1><CountUp
end={
    2000}
duration={5}
/> +</h1>
<h3>Villages</h3>
<span>children and</span>
<br />
<span>their families are</span>
<br />
<span>impacted every year</span>

</div>

<div>
<h1><CountUp
end={200}
duration={4}
/> +</h1>
<h3>Project Found</h3>
<span>children and</span>
<br />
<span>their families are</span>
<br />
<span>impacted every year</span>

</div>


<div>
<h1><CountUp
end={10}
duration={10}
/> +</h1>
<h3>States</h3>
<span>children and</span>
<br />
<span>their families are</span>
<br />
<span>impacted every year</span>

</div>



</div>
    </div>
  )
}

export default CountDown