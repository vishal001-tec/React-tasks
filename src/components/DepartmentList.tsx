import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Collapse, Checkbox } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
  name: string;
  subDepartments: string[];
}

const departments: Department[] = [
  {
    name: 'Customer_service',
    subDepartments: [
      "support",
      "customer_success"
    ]
  },
  {
    name: 'Desig',
    subDepartments: [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  },
];

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleClick = (department: string) => {
    setOpen(open === department ? null : department);
  };

  return (
    <List>
      {departments.map((department) => (
        <React.Fragment key={department.name}>
          <ListItem button onClick={() => handleClick(department.name)} style={{ backgroundColor: '#f0f0f0', marginBottom: '10px',width: 400, marginLeft:'200px'}}>
            <ListItemText primary={department.name} style={{ color: '#0c1014', fontWeight: 'bold'}} />
            <IconButton edge="end" aria-label="expand">
              {open === department.name ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ListItem>
          <Collapse in={open === department.name} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((subDept) => (
                <ListItem key={subDept} button style={{ paddingLeft: '205px' }}>
                  <Checkbox edge="start" />
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;
