import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Badge, Box, Chip, Grid, Paper, Stack, TextField, Typography, styled } from "@mui/material"
import useGetData from "./hooks/useGetData.hook"
import LoadingPage from '../../components/pages/Loading.page';
import { useMemo, useRef, useState } from 'react';
import { IData, IDataKey } from './interfaces/IData';
import { FaPlus, FaTrash } from 'react-icons/fa';


const ContetTable = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  margin: 5,
  width: 'calc(100% - 20px)',
  height: '100%',
  maxWidth: 1028,
  maxHeight: 728,
  overflow: 'auto',
}));

const Content = styled(Grid)(() => ({
  display: 'flex',
  position: 'absolute',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  padding: 20,
}))

const columns: GridColDef[] = [
  { field: 'uid', headerName: 'UUID', width: 150 },
  { field: 'brand', headerName: 'brand', width: 150 },
  { field: 'name', headerName: 'name', width: 150 },
  { field: 'style', headerName: 'style', width: 250 },
  { field: 'hop', headerName: 'hop', width: 150 },
  { field: 'yeast', headerName: 'yeast', width: 300 },
  { field: 'malts', headerName: 'malts', width: 150 },
  { field: 'ibu', headerName: 'ibu', width: 150 },
  { field: 'alcohol', headerName: 'alcohol', width: 80 },
  { field: 'blg', headerName: 'blg', width: 150 },
];

const DataPage = () => {
  const { data, isLoading } = useGetData()
  const [value, setvalue] = useState('')
  const [headFilter, setHeadFilter] = useState<IDataKey[]>([])
  const refColums = useRef<IDataKey[]>([
    'uid',
    'alcohol',
    'blg',
    'brand',
    'hop',
    'ibu',
    'malts',
    'name',
    'style',
    'yeast'
  ])

  const handleClickHeader = (value: IDataKey) => {
    console.log(value)
    if (headFilter.includes(value)) setHeadFilter([...headFilter.filter(key => key !== value)])
    else setHeadFilter([...headFilter, value])
  }
  
  const filtreData = useMemo(() => {
    if (value === '') return data;
    return data.filter((item: IData) => {
      let include = false
      const listKeys: IDataKey[] = Object.keys(item) as IDataKey[];
      refColums.current
        .filter(key => !headFilter.includes(key))
        .forEach(key => {
        const valueCheck = `${item[key]}`;
        if (valueCheck.toUpperCase().includes(value.toUpperCase()))
          include = true;
      })
      return include
    })
  }, [data, value, headFilter])

  return <Content>
    <Typography>
      Data page
    </Typography>
    <TextField
      fullWidth
      style={{maxWidth: 1028}}
      value={value}
      size="small"
      label="Search"
      onChange={e => setvalue(e.target.value)}
    />
    <br/>
    <Stack
      direction="row"
      flexWrap="nowrap"
      style={{paddingRight: 10, overflow: 'auto', maxWidth: 1028, width: '100%', height: 80}}
      justifyContent='start'
      spacing={1}
    >
      {refColums.current
        .map(key => <Chip
          style={{padding: 10, fontSize: 18}}
          key={key}
          label={key}
          variant='outlined'
          color={headFilter.includes(key) ? 'success' : 'primary'}
          onDelete={() => handleClickHeader(key)}
          deleteIcon={!headFilter.includes(key) ? <FaTrash size={12} /> : <FaPlus size={12} />}
        />)}
    </Stack>
    <br />
    <ContetTable elevation={20} variant="outlined" square >
      <DataGrid
        rows={[...filtreData]}
        columns={columns.filter(({field }) => !headFilter.includes(field as IDataKey))}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
      />
    </ContetTable>
    {isLoading && <LoadingPage title='cargando datos...' />}
  </Content>
}

export default DataPage
