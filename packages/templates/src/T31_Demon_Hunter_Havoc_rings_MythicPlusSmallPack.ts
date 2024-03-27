import { dedent } from "ts-dedent";

export const T31_Demon_Hunter_Havoc_rings_MythicPlusSmallPack = dedent` 
  iterations=10000
  desired_targets=6
  max_time=40
  calculate_scale_factors=0
  scale_only=strength,intellect,agility,crit,mastery,vers,haste,weapon_dps,weapon_offhand_dps
  override.bloodlust=1
  override.arcane_intellect=1
  override.power_word_fortitude=1
  override.battle_shout=1
  override.mystic_touch=1
  override.chaos_brand=1
  override.windfury_totem=1
  override.mark_of_the_wild=1
  override.bleeding=1
  report_details=1
  single_actor_batch=1
  optimize_expressions=1
  target_error=0.05
  
   
  demonhunter="T31_Demon_Hunter_Havoc"
  spec=havoc
  level=70
  race=night_elf
  timeofday=day
  role=attack
  position=back
  talents=BEkAAAAAAAAAAAAAAAAAAAAAAIJRkkgkkIJhkkAAAAAAASLEJEJtkkWaREIho0ikEB
  
  head=screaming_torchfiends_burning_scowl,id=207263,bonus_id=7187/1520/8780,gem_id=192982,enchant_id=7052
  neck=chain_of_the_green_flight,id=137311,bonus_id=3326/1514/6536/6646/8782,gem_id=192922/192922/192922
  shoulders=screaming_torchfiends_horned_memento,id=207261,bonus_id=7187/1520
  back=raals_bib,id=159294,bonus_id=3316/1515/6646
  chest=screaming_torchfiends_binding,id=207266,bonus_id=7187/1520,enchant_id=6625
  wrists=lifebound_bindings,id=193419,bonus_id=9500/9498/9405/8960/8797/8780,ilevel=486,gem_id=192922,enchant_id=6574,crafted_stats=49/36
  hands=screaming_torchfiends_grasp,id=207264,bonus_id=7187/1520
  waist=bloody_dragonhide_belt,id=207131,bonus_id=7187/1520/8780,gem_id=192922,enchant_id=6904
  legs=screaming_torchfiends_blazewraps,id=207262,bonus_id=7187/1520,enchant_id=6490
  feet=toxic_thorn_footwraps,id=193452,bonus_id=9500/9498/9405/8960
  finger1=band_of_twisted_bark,id=134531,bonus_id=3326/1514/6536/6646/8780,ilevel=489,gem_id=192922,enchant_id=6550
  finger2=daydreamers_glimmering_ring,id=208442,bonus_id=7187/1520/8780,ilevel=489,gem_id=192922,enchant_id=6550
  trinket1=cataclysmic_signet_brand,id=207166,bonus_id=7187/1520
  trinket2=witherbarks_branch,id=109999,bonus_id=9888
  main_hand=double_time,id=207991,bonus_id=6536/1611/6646,enchant_id=6655
  off_hand=thorncaller_claw,id=207784,bonus_id=7187/1520,enchant_id=6655
  
  profileset."Ring-bound / Titanic"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Ring-bound / Titanic"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  
  profileset."Ring-bound / Eggnog"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Ring-bound / Eggnog"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  
  profileset."Ring-bound / Onyx"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Ring-bound / Onyx"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  
  profileset."Ring-bound / Diurna"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Ring-bound / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=535
  
  profileset."Titanic / Eggnog"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Titanic / Eggnog"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  
  profileset."Titanic / Onyx"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Titanic / Onyx"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  
  profileset."Titanic / Diurna"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=525
  profileset."Titanic / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=535
  
  profileset."Eggnog / Onyx"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  profileset."Eggnog / Onyx"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  
  profileset."Eggnog / Diurna"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=528
  profileset."Eggnog / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=4800/4786/1498,gem_id=192945,enchant_id=6556,ilevel=535
  `;
