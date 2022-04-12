import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Item from '../ListProducts/Item';

export default function FileSystemNavigator() {
    const { title, description,category , price, duration, image, id, stock, initial} = Item
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId="1" label="Productos">
        <TreeItem nodeId="2" label={category} />
        <TreeItem nodeId="3" label={category} />
      </TreeItem>
    </TreeView>
  );
}