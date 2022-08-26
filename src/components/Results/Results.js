import React from 'react';

const Results = ({ password, passwords }) => (


    <div class="card card-with" >
      <div class="card-body">
        <h1 class="card-title text-center mb-4">{password}</h1>
        {passwords
          ? passwords.map((item, i) => {
              if (item.pass !== password)
                return (
                  <p className="card-text text-center mb-1" key={item + i}>
                    {item.pass}
                  </p>
                );
            })
          : "Generate your password!"}
      </div>
    </div>
);

export default Results;
