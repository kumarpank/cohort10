const p = [
    {
      id: 1,
      name: "John Doe",
      city: "New York",
      state: "New York",
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      city: "Los Angeles",
      state: "California",
      isActive: false,
    },
    {
      id: 3,
      name: "Michael Johnson",
      city: "Chicago",
      state: "Illinois",
      isActive: true,
    },
    {
      id: 4,
      name: "Emily Brown",
      city: "Houston",
      state: "Texas",
      isActive: true,
    },
  ];

  
  const newArr = p.map((item)=>{
        if(item.isActive === true){
            item.isActive = "Avaliable";
        }
        else{
            item.isActive = "Not avaliable";
        }

        return item;
  })

  console.log({newArr});

