import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Swap'),
    href: '/swap',
    icon: 'Swap',
    showItemsOnMobile: false,
  },  
  {
    label: t('Farm'),
    href: '/farms_',
    icon: 'Farm',
    showItemsOnMobile: false,
  },
  {
    label: t('Stake'),
    href: '/pools_',
    icon: 'Pool',
    showItemsOnMobile: false,
  },
  {
    label: t('NFTs'),
    href: '/nft-pools_',
    icon: 'Nft',
    showItemsOnMobile: false,
  },
  {
    label: t('Specials'),
    href: '/earn_',
    icon: 'Pool',
    showItemsOnMobile: false,
  },
  {
    label: t('Add LP'),
    href: '/liquidity_',
    icon: 'Add',
    showItemsOnMobile: false,
  },
  {
    label: t('Referrals'),
    href: '/referral_',
    icon: 'Groups',
    showItemsOnMobile: false,
  },  
  {
    label: t('About Us'),
    href: '/#',
    icon: 'Groups',
    showItemsOnMobile: false,
  },  
]

export default config
