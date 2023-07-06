import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://eoecxabvfznvfynacweo.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvZWN4YWJ2ZnpudmZ5bmFjd2VvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODU3NjM0NywiZXhwIjoyMDA0MTUyMzQ3fQ.qFGx4_Yfn2mdqTka__rIbl5mz1plC4JzyA8a98a0HrQ",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvZWN4YWJ2ZnpudmZ5bmFjd2VvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODU3NjM0NywiZXhwIjoyMDA0MTUyMzQ3fQ.qFGx4_Yfn2mdqTka__rIbl5mz1plC4JzyA8a98a0HrQ"
    }
})