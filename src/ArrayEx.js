import React from 'react';
import { useState } from 'react';

function ArrayEx(props) {
    const datas = [
        {
          id: 1,
          name: 'Nick',
          age: 21
        },
        {
          id: 2,
          name: 'Lara',
          age: 30
        }
      ];
    
      const [data, setData] = useState(datas);
    
      const updateState = (index) => (e) => {
        const newArray = data.map((item, i) => {
          if (index === i) {
            return { ...item, [e.target.name]: e.target.value };
          } else {
            return item;
          }
        });
        setData(newArray);
      };
    
      return (
        <div className="App">
          <p>Hello, world!</p>
          {datas.map((datum, index) => {
            <label key={index}>
              <input
                type="text"
                name="name"
                value={datum.name}
                onChange={updateState(index)}
              />
            </label>;
            })}
        </div>
      );
    }

export default ArrayEx;