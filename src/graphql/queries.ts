import { gql } from "./__generated__";


export const GET_SHIPS=gql(`
query Ships {
    ships {
      name
      id
      roles
     home_port
   
    }
   }
`)

