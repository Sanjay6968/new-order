// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  title: string
  sales: string
  trend: ReactNode
  trendDir: string
  subtitle: string
  avatarText: string
  trendNumber: string
  avatarColor: ThemeColor
}

const data: DataType[] = [
  {
    sales: '894K',
    trendDir: 'up',
    subtitle: 'Telangana',
    title: '₹8600',
    avatarText: 'TS',
    trendNumber: '25.8%',
    avatarColor: 'success',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  },
  {
    sales: '645K',
    subtitle: 'Andhra Pradesh',
    trendDir: 'down',
    title: '₹7200',
    avatarText: 'AP',
    trendNumber: '6.2%',
    avatarColor: 'error',
    trend: <ChevronDown sx={{ color: 'error.main', fontWeight: 600 }} />
  },
  {
    sales: '148K',
    title: '₹9100',
    trendDir: 'up',
    avatarText: 'DL',
    subtitle: 'Delhi',
    trendNumber: '12.4%',
    avatarColor: 'warning',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  },
  {
    sales: '86K',
    title: '₹5600',
    trendDir: 'down',
    avatarText: 'KA',
    subtitle: 'Karnataka',
    trendNumber: '11.9%',
    avatarColor: 'secondary',
    trend: <ChevronDown sx={{ color: 'error.main', fontWeight: 600 }} />
  },
  {
    sales: '42K',
    title: '₹9725',
    trendDir: 'up',
    avatarText: 'MH',
    subtitle: 'Maharashtra',
    trendNumber: '16.2%',
    avatarColor: 'error',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  }
]

const SalesByCountries = () => {
  return (
    <Card>
      <CardHeader
        title='Sales by State'
        titleTypographyProps={{ sx: { lineHeight: '1.2 !important', letterSpacing: '0.31px !important' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />

      <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== data.length - 1 ? { mb: 5.875 } : {})
              }}
            >
              <Avatar
                sx={{
                  width: 38,
                  height: 38,
                  marginRight: 3,
                  fontSize: '1rem',
                  color: 'common.white',
                  backgroundColor: `${item.avatarColor}.main`
                }}
              >
                {item.avatarText}
              </Avatar>

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ mr: 0.5, fontWeight: 600, letterSpacing: '0.25px' }}>{item.title}</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {item.trend}

                      <Typography
                        variant='caption'
                        sx={{
                          fontWeight: 600,
                          lineHeight: 1.5,
                          color: item.trendDir === 'down' ? 'error.main' : 'success.main'
                        }}
                      >
                        {item.trendNumber}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant='caption' sx={{ lineHeight: 1.5 }}>
                    {item.subtitle}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                    {item.sales}
                  </Typography>

                  <Typography variant='caption' sx={{ lineHeight: 1.5 }}>
                    Sales
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default SalesByCountries
