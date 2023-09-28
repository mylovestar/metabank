import styled from 'styled-components'
import { Flex, TooltipText, IconButton, useModal, CalculateIcon, Skeleton, useTooltip } from '@metabank/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import RoiCalculatorModal from 'components/RoiCalculatorModal'
import { DeserializedPool } from 'state/types'
import BigNumber from 'bignumber.js'
import { BIG_ZERO } from 'utils/bigNumber'
import { vaultPoolConfig } from 'config/constants/pools'

const ApyLabelContainer = styled(Flex)`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

interface AprRowProps {
  pool: DeserializedPool
  stakedBalance: BigNumber
  performanceFee?: number
}

const AprRow: React.FC<AprRowProps> = ({ pool, stakedBalance, performanceFee = 0 }) => {
  const { t } = useTranslation()
  const {
    stakingToken,
    earningToken,
    isFinished,
    apr,
    rawApr,
    earningTokenPrice,
    stakingTokenPrice,
    userData,
    vaultKey,
  } = pool

  const apy = (apr / 365 * 7 / 100 + 1) ** (365 / 7) * 100 - 100;

  const stakingTokenBalance = userData?.stakingTokenBalance ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO

  const tooltipContent =
    t('APY calculation is based on manually compounding every 7 days.')

  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, { placement: 'bottom-start' })

  const apyModalLink = stakingToken.address ? `/swap?outputCurrency=${stakingToken.address}` : '/swap'

  const [onPresentApyModal] = useModal(
    <RoiCalculatorModal
      earningTokenPrice={earningTokenPrice}
      stakingTokenPrice={stakingTokenPrice}
      apr={vaultKey ? rawApr : apr}
      linkLabel={t('Get %symbol%', { symbol: stakingToken.symbol })}
      linkHref={apyModalLink}
      stakingTokenBalance={stakedBalance.plus(stakingTokenBalance)}
      stakingTokenSymbol={stakingToken.symbol}
      earningTokenSymbol={earningToken.symbol}
      autoCompoundFrequency={vaultPoolConfig[vaultKey]?.autoCompoundFrequency ?? 0}
      performanceFee={performanceFee}
      decimal={stakingToken.decimals}
    />,
  )

  return (
    <Flex alignItems="center" justifyContent="space-between" >
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef}>{`${t('APY')}:`}</TooltipText>
      {apr || isFinished ? (
        <ApyLabelContainer alignItems="center" onClick={onPresentApyModal}>
          <Balance
            fontSize="16px"
            fontWeight={600}
            isDisabled={isFinished}
            value={isFinished ? 0 : apy}
            decimals={2}
            unit="%"
            onClick={onPresentApyModal}
          />
        </ApyLabelContainer>
      ) : (
        <Skeleton width="82px" height="32px" />
      )}
    </Flex>
  )
}

export default AprRow
