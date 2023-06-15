const client = require('./client')

function getItems() {
  client.getItems({}, (error, response) => {
    if(error){
      console.log(error)
    } else {
      console.log(response.items)
    }
  })
}
  
function getItem(item_id) {
  const data = { item_id }
  client.getItem(data, (error, response) => {
    if(error){
      console.log(error)
    }
    else{
      console.log(response)
    }
  })
} 
  
function addItem(item_id, description, date) {
  const data = { item_id, description, date }
  client.addItem(data, (error, response) => {
    if(error){
      console.log(error)
    }
    else{
      console.log(response)
    }
  })
}
  
function updateItem(item_id, description, date){
  const data = { item_id, description, date }
  client.updateItem(data, (error, response) => {
    if(error){
      console.log(error)
    }
    else{
      console.log(response)
    }
  })
}

function deleteItem(item_id, description, date){
  const data = { item_id, description, date }
  client.deleteItem(data, (error, response) => {
    if(error){
      console.log(error)
    }
    else{
      console.log(response)
    }
  })
}

// addItem('1', 'Desc 1', '21/04/2023')

// updateItem('1', 'Desc 1 update', '21/04/2023')
    
// addItem('2', 'Desc 2', '19/09/1999')
  
// deleteItem('2')

// addItem('3', 'Desc 3', '24/07/2017')

getItem('1')

getItems()