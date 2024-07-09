import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Post {
  id: number;
  title: string;
  body: string;
}

const SecondPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'body', headerName: 'Body', width: 2000  },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Posts</Typography>
      <div style={{ height: 400, width: '100%', overflow:'scroll'}}>
        <DataGrid rows={posts} columns={columns}  autoHeight />
      </div>
    </Container>
  );
};

export default SecondPage;
