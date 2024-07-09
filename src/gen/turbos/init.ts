import * as fee from './fee/structs'
import * as fee10000Bps from './fee10000bps/structs'
import * as fee100Bps from './fee100bps/structs'
import * as fee3000Bps from './fee3000bps/structs'
import * as fee500Bps from './fee500bps/structs'
import * as i128 from './i128/structs'
import * as i32 from './i32/structs'
import * as i64 from './i64/structs'
import * as poolFactory from './pool-factory/structs'
import * as pool from './pool/structs'
import * as positionManager from './position-manager/structs'
import * as positionNft from './position-nft/structs'
import * as rewardManager from './reward-manager/structs'
import { StructClassLoader } from '../_framework/loader'

export function registerClasses(loader: StructClassLoader) {
  loader.register(i64.I64)
  loader.register(i32.I32)
  loader.register(i128.I128)
  loader.register(fee.Fee)
  loader.register(fee10000Bps.FEE10000BPS)
  loader.register(fee100Bps.FEE100BPS)
  loader.register(fee3000Bps.FEE3000BPS)
  loader.register(fee500Bps.FEE500BPS)
  loader.register(pool.Versioned)
  loader.register(pool.Tick)
  loader.register(pool.PositionRewardInfo)
  loader.register(pool.Position)
  loader.register(pool.PoolRewardVault)
  loader.register(pool.PoolRewardInfo)
  loader.register(pool.Pool)
  loader.register(pool.ComputeSwapState)
  loader.register(pool.FlashSwapReceipt)
  loader.register(pool.SwapEvent)
  loader.register(pool.MintEvent)
  loader.register(pool.BurnEvent)
  loader.register(pool.TogglePoolStatusEvent)
  loader.register(pool.UpdatePoolFeeProtocolEvent)
  loader.register(pool.CollectEvent)
  loader.register(pool.CollectProtocolFeeEvent)
  loader.register(pool.CollectRewardEvent)
  loader.register(pool.InitRewardEvent)
  loader.register(pool.UpdateRewardManagerEvent)
  loader.register(pool.UpdateRewardEmissionsEvent)
  loader.register(pool.AddRewardEvent)
  loader.register(pool.RemoveRewardEvent)
  loader.register(pool.UpgradeEvent)
  loader.register(pool.MigratePositionEvent)
  loader.register(pool.ModifyTickRewardEvent)
  loader.register(rewardManager.RewardManagerAdminCap)
  loader.register(positionNft.TurbosPositionNFT)
  loader.register(positionNft.POSITION_NFT)
  loader.register(positionNft.MintNFTEvent)
  loader.register(positionManager.PositionRewardInfo)
  loader.register(positionManager.Position)
  loader.register(positionManager.CollectEvent)
  loader.register(positionManager.CollectRewardEvent)
  loader.register(positionManager.Positions)
  loader.register(positionManager.IncreaseLiquidityEvent)
  loader.register(positionManager.DecreaseLiquidityEvent)
  loader.register(poolFactory.PoolFactoryAdminCap)
  loader.register(poolFactory.PoolSimpleInfo)
  loader.register(poolFactory.PoolConfig)
  loader.register(poolFactory.PoolCreatedEvent)
  loader.register(poolFactory.FeeAmountEnabledEvent)
  loader.register(poolFactory.SetFeeProtocolEvent)
}
