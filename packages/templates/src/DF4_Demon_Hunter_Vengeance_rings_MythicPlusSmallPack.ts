/* eslint-disable unicorn/filename-case -- Disabling because this needs to match simc. */
import { dedent } from "ts-dedent";

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const DF4_Demon_Hunter_Vengeance_rings_MythicPlusSmallPack = dedent` 
  ptr=1
  
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
  
   
  demonhunter="DF4_Demon_Hunter_Vengeance"
  spec=vengeance
  level=70
  race=night_elf
  timeofday=day
  role=tank
  position=front
  talents=BUkAAAAAAAAAAAAAAAAAAAAAAAAiIJJCJIJBhIlkQiWiEJSIJpkk0iESQAAAAAJJB
  
  
  head=screaming_torchfiends_burning_scowl,id=217228,bonus_id=10359/1491/6935,gem_id=192919,enchant=incandescent_essence
  neck=amulet_of_eonars_chosen,id=208445,bonus_id=10359/1491/8782,gem_id=192919/192919/192919
  shoulders=screaming_torchfiends_horned_memento,id=217230,bonus_id=10359/1491
  back=voice_of_the_silent_star,id=204465,bonus_id=10359/1498/10884
  chest=screaming_torchfiends_binding,id=217226,bonus_id=10359/1491,enchant_id=6625
  wrists=verdant_sanctuary_bands,id=210206,bonus_id=10359/1491/6935,gem_id=192919
  hands=screaming_torchfiends_grasp,id=217227,bonus_id=10359/1491
  waist=cinch_of_forgotten_duty,id=193636,bonus_id=10359/1491/6935,gem_id=192985
  legs=screaming_torchfiends_blazewraps,id=217229,bonus_id=10359/1491,enchant=frosted_armor_kit_3
  feet=iceclimbers_cleats,id=195509,bonus_id=10359/1491
  finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  trinket1=augury_of_the_primal_flame,id=208614,bonus_id=10359/1491
  trinket2=cataclysmic_signet_brand,id=207166,bonus_id=10359/1491
  main_hand=thorncaller_claw,id=207784,bonus_id=10359/1491,enchant=sophic_devotion_3
  off_hand=stormslash,id=193688,bonus_id=10359/1491,enchant=wafting_devotion_3
  
  profileset."Ring-bound (DCS3) / Titanic (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Titanic (DCS3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DCS3) / Titanic (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Titanic (DH3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DCS3) / Titanic (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Titanic (DM3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DCS3) / Titanic (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Titanic (DV3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DCS3) / Eggnog (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Eggnog (DCS3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DCS3) / Eggnog (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Eggnog (DH3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DCS3) / Eggnog (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Eggnog (DM3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DCS3) / Eggnog (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Eggnog (DV3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DCS3) / Onyx (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DCS3) / Onyx (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DCS3) / Onyx (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DCS3) / Onyx (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DCS3) / Unstable (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DCS3) / Unstable (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DCS3) / Unstable (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DCS3) / Unstable (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DCS3) / Eternal (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DCS3) / Eternal (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DCS3) / Eternal (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DCS3) / Eternal (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DCS3) / Platinum (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DCS3) / Platinum (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DCS3) / Platinum (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DCS3) / Platinum (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DCS3) / Bloodied (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DCS3) / Bloodied (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DCS3) / Bloodied (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DCS3) / Bloodied (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DCS3) / Circle (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DCS3) / Circle (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DCS3) / Circle (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DCS3) / Circle (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DCS3) / Scalebane (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DCS3) / Scalebane (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DCS3) / Scalebane (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DCS3) / Scalebane (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DCS3) / Thunderous (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DCS3) / Thunderous (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DCS3) / Thunderous (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DCS3) / Thunderous (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DCS3) / Diurna (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DCS3) / Diurna (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DCS3) / Diurna (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DCS3) / Diurna (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Ring-bound (DCS3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DH3) / Titanic (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Titanic (DCS3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DH3) / Titanic (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Titanic (DH3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DH3) / Titanic (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Titanic (DM3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DH3) / Titanic (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Titanic (DV3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DH3) / Eggnog (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Eggnog (DCS3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DH3) / Eggnog (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Eggnog (DH3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DH3) / Eggnog (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Eggnog (DM3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DH3) / Eggnog (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Eggnog (DV3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DH3) / Onyx (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DH3) / Onyx (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DH3) / Onyx (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DH3) / Onyx (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DH3) / Unstable (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DH3) / Unstable (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DH3) / Unstable (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DH3) / Unstable (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DH3) / Eternal (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DH3) / Eternal (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DH3) / Eternal (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DH3) / Eternal (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DH3) / Platinum (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DH3) / Platinum (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DH3) / Platinum (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DH3) / Platinum (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DH3) / Bloodied (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DH3) / Bloodied (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DH3) / Bloodied (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DH3) / Bloodied (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DH3) / Circle (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DH3) / Circle (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DH3) / Circle (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DH3) / Circle (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DH3) / Scalebane (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DH3) / Scalebane (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DH3) / Scalebane (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DH3) / Scalebane (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DH3) / Thunderous (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DH3) / Thunderous (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DH3) / Thunderous (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DH3) / Thunderous (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DH3) / Diurna (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DH3) / Diurna (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DH3) / Diurna (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DH3) / Diurna (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Ring-bound (DH3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DM3) / Titanic (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Titanic (DCS3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DM3) / Titanic (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Titanic (DH3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DM3) / Titanic (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Titanic (DM3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DM3) / Titanic (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Titanic (DV3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DM3) / Eggnog (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Eggnog (DCS3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DM3) / Eggnog (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Eggnog (DH3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DM3) / Eggnog (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Eggnog (DM3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DM3) / Eggnog (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Eggnog (DV3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DM3) / Onyx (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DM3) / Onyx (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DM3) / Onyx (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DM3) / Onyx (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DM3) / Unstable (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DM3) / Unstable (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DM3) / Unstable (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DM3) / Unstable (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DM3) / Eternal (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DM3) / Eternal (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DM3) / Eternal (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DM3) / Eternal (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DM3) / Platinum (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DM3) / Platinum (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DM3) / Platinum (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DM3) / Platinum (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DM3) / Bloodied (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DM3) / Bloodied (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DM3) / Bloodied (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DM3) / Bloodied (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DM3) / Circle (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DM3) / Circle (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DM3) / Circle (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DM3) / Circle (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DM3) / Scalebane (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DM3) / Scalebane (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DM3) / Scalebane (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DM3) / Scalebane (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DM3) / Thunderous (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DM3) / Thunderous (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DM3) / Thunderous (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DM3) / Thunderous (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DM3) / Diurna (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DM3) / Diurna (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DM3) / Diurna (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DM3) / Diurna (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Ring-bound (DM3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DV3) / Titanic (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Titanic (DCS3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DV3) / Titanic (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Titanic (DH3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DV3) / Titanic (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Titanic (DM3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DV3) / Titanic (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Titanic (DV3)"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DV3) / Eggnog (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Eggnog (DCS3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DV3) / Eggnog (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Eggnog (DH3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DV3) / Eggnog (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Eggnog (DM3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DV3) / Eggnog (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Eggnog (DV3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DV3) / Onyx (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DV3) / Onyx (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DV3) / Onyx (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DV3) / Onyx (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DV3) / Unstable (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DV3) / Unstable (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DV3) / Unstable (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DV3) / Unstable (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DV3) / Eternal (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DV3) / Eternal (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DV3) / Eternal (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DV3) / Eternal (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DV3) / Platinum (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DV3) / Platinum (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DV3) / Platinum (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DV3) / Platinum (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DV3) / Bloodied (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DV3) / Bloodied (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DV3) / Bloodied (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DV3) / Bloodied (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DV3) / Circle (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DV3) / Circle (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DV3) / Circle (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DV3) / Circle (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DV3) / Scalebane (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DV3) / Scalebane (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DV3) / Scalebane (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DV3) / Scalebane (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DV3) / Thunderous (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DV3) / Thunderous (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DV3) / Thunderous (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DV3) / Thunderous (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Ring-bound (DV3) / Diurna (DCS3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound (DV3) / Diurna (DH3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Ring-bound (DV3) / Diurna (DM3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Ring-bound (DV3) / Diurna (DV3)"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Ring-bound (DV3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DCS3) / Eggnog (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Eggnog (DCS3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DCS3) / Eggnog (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Eggnog (DH3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DCS3) / Eggnog (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Eggnog (DM3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DCS3) / Eggnog (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Eggnog (DV3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DCS3) / Onyx (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DCS3) / Onyx (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DCS3) / Onyx (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DCS3) / Onyx (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DCS3) / Unstable (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DCS3) / Unstable (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DCS3) / Unstable (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DCS3) / Unstable (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DCS3) / Eternal (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DCS3) / Eternal (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DCS3) / Eternal (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DCS3) / Eternal (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DCS3) / Platinum (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DCS3) / Platinum (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DCS3) / Platinum (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DCS3) / Platinum (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DCS3) / Bloodied (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DCS3) / Bloodied (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DCS3) / Bloodied (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DCS3) / Bloodied (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DCS3) / Circle (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DCS3) / Circle (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DCS3) / Circle (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DCS3) / Circle (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DCS3) / Scalebane (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DCS3) / Scalebane (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DCS3) / Scalebane (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DCS3) / Scalebane (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DCS3) / Thunderous (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DCS3) / Thunderous (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DCS3) / Thunderous (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DCS3) / Thunderous (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DCS3) / Diurna (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DCS3) / Diurna (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DCS3) / Diurna (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DCS3) / Diurna (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_critical_strike_3
  profileset."Titanic (DCS3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DH3) / Eggnog (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Eggnog (DCS3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DH3) / Eggnog (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Eggnog (DH3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DH3) / Eggnog (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Eggnog (DM3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DH3) / Eggnog (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Eggnog (DV3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DH3) / Onyx (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DH3) / Onyx (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DH3) / Onyx (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DH3) / Onyx (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DH3) / Unstable (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DH3) / Unstable (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DH3) / Unstable (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DH3) / Unstable (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DH3) / Eternal (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DH3) / Eternal (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DH3) / Eternal (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DH3) / Eternal (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DH3) / Platinum (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DH3) / Platinum (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DH3) / Platinum (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DH3) / Platinum (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DH3) / Bloodied (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DH3) / Bloodied (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DH3) / Bloodied (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DH3) / Bloodied (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DH3) / Circle (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DH3) / Circle (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DH3) / Circle (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DH3) / Circle (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DH3) / Scalebane (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DH3) / Scalebane (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DH3) / Scalebane (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DH3) / Scalebane (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DH3) / Thunderous (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DH3) / Thunderous (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DH3) / Thunderous (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DH3) / Thunderous (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DH3) / Diurna (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DH3) / Diurna (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DH3) / Diurna (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DH3) / Diurna (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_haste_3
  profileset."Titanic (DH3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DM3) / Eggnog (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Eggnog (DCS3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DM3) / Eggnog (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Eggnog (DH3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DM3) / Eggnog (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Eggnog (DM3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DM3) / Eggnog (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Eggnog (DV3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DM3) / Onyx (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DM3) / Onyx (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DM3) / Onyx (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DM3) / Onyx (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DM3) / Unstable (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DM3) / Unstable (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DM3) / Unstable (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DM3) / Unstable (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DM3) / Eternal (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DM3) / Eternal (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DM3) / Eternal (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DM3) / Eternal (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DM3) / Platinum (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DM3) / Platinum (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DM3) / Platinum (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DM3) / Platinum (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DM3) / Bloodied (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DM3) / Bloodied (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DM3) / Bloodied (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DM3) / Bloodied (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DM3) / Circle (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DM3) / Circle (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DM3) / Circle (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DM3) / Circle (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DM3) / Scalebane (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DM3) / Scalebane (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DM3) / Scalebane (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DM3) / Scalebane (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DM3) / Thunderous (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DM3) / Thunderous (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DM3) / Thunderous (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DM3) / Thunderous (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DM3) / Diurna (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DM3) / Diurna (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DM3) / Diurna (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DM3) / Diurna (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_mastery_3
  profileset."Titanic (DM3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DV3) / Eggnog (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Eggnog (DCS3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DV3) / Eggnog (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Eggnog (DH3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DV3) / Eggnog (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Eggnog (DM3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DV3) / Eggnog (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Eggnog (DV3)"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DV3) / Onyx (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DV3) / Onyx (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DV3) / Onyx (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DV3) / Onyx (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DV3) / Unstable (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DV3) / Unstable (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DV3) / Unstable (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DV3) / Unstable (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DV3) / Eternal (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DV3) / Eternal (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DV3) / Eternal (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DV3) / Eternal (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DV3) / Platinum (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DV3) / Platinum (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DV3) / Platinum (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DV3) / Platinum (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DV3) / Bloodied (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DV3) / Bloodied (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DV3) / Bloodied (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DV3) / Bloodied (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DV3) / Circle (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DV3) / Circle (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DV3) / Circle (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DV3) / Circle (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DV3) / Scalebane (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DV3) / Scalebane (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DV3) / Scalebane (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DV3) / Scalebane (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DV3) / Thunderous (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DV3) / Thunderous (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DV3) / Thunderous (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DV3) / Thunderous (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Titanic (DV3) / Diurna (DCS3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic (DV3) / Diurna (DH3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Titanic (DV3) / Diurna (DM3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Titanic (DV3) / Diurna (DV3)"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,crafted_stats=36/32,ilevel=522,enchant=devotion_of_versatility_3
  profileset."Titanic (DV3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DCS3) / Onyx (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DCS3) / Onyx (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DCS3) / Onyx (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DCS3) / Onyx (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DCS3) / Unstable (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DCS3) / Unstable (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DCS3) / Unstable (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DCS3) / Unstable (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DCS3) / Eternal (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DCS3) / Eternal (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DCS3) / Eternal (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DCS3) / Eternal (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DCS3) / Platinum (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DCS3) / Platinum (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DCS3) / Platinum (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DCS3) / Platinum (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DCS3) / Bloodied (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DCS3) / Bloodied (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DCS3) / Bloodied (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DCS3) / Bloodied (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DCS3) / Circle (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DCS3) / Circle (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DCS3) / Circle (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DCS3) / Circle (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DCS3) / Scalebane (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DCS3) / Scalebane (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DCS3) / Scalebane (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DCS3) / Scalebane (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DCS3) / Thunderous (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DCS3) / Thunderous (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DCS3) / Thunderous (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DCS3) / Thunderous (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DCS3) / Diurna (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DCS3) / Diurna (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DCS3) / Diurna (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DCS3) / Diurna (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog (DCS3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DH3) / Onyx (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DH3) / Onyx (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DH3) / Onyx (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DH3) / Onyx (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DH3) / Unstable (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DH3) / Unstable (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DH3) / Unstable (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DH3) / Unstable (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DH3) / Eternal (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DH3) / Eternal (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DH3) / Eternal (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DH3) / Eternal (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DH3) / Platinum (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DH3) / Platinum (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DH3) / Platinum (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DH3) / Platinum (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DH3) / Bloodied (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DH3) / Bloodied (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DH3) / Bloodied (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DH3) / Bloodied (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DH3) / Circle (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DH3) / Circle (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DH3) / Circle (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DH3) / Circle (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DH3) / Scalebane (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DH3) / Scalebane (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DH3) / Scalebane (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DH3) / Scalebane (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DH3) / Thunderous (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DH3) / Thunderous (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DH3) / Thunderous (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DH3) / Thunderous (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DH3) / Diurna (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DH3) / Diurna (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DH3) / Diurna (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DH3) / Diurna (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eggnog (DH3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DM3) / Onyx (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DM3) / Onyx (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DM3) / Onyx (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DM3) / Onyx (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DM3) / Unstable (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DM3) / Unstable (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DM3) / Unstable (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DM3) / Unstable (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DM3) / Eternal (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DM3) / Eternal (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DM3) / Eternal (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DM3) / Eternal (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DM3) / Platinum (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DM3) / Platinum (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DM3) / Platinum (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DM3) / Platinum (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DM3) / Bloodied (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DM3) / Bloodied (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DM3) / Bloodied (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DM3) / Bloodied (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DM3) / Circle (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DM3) / Circle (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DM3) / Circle (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DM3) / Circle (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DM3) / Scalebane (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DM3) / Scalebane (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DM3) / Scalebane (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DM3) / Scalebane (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DM3) / Thunderous (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DM3) / Thunderous (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DM3) / Thunderous (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DM3) / Thunderous (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DM3) / Diurna (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DM3) / Diurna (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DM3) / Diurna (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DM3) / Diurna (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eggnog (DM3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DV3) / Onyx (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Onyx (DCS3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DV3) / Onyx (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Onyx (DH3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DV3) / Onyx (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Onyx (DM3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DV3) / Onyx (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Onyx (DV3)"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DV3) / Unstable (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DV3) / Unstable (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DV3) / Unstable (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DV3) / Unstable (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DV3) / Eternal (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DV3) / Eternal (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DV3) / Eternal (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DV3) / Eternal (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DV3) / Platinum (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DV3) / Platinum (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DV3) / Platinum (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DV3) / Platinum (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DV3) / Bloodied (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DV3) / Bloodied (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DV3) / Bloodied (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DV3) / Bloodied (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DV3) / Circle (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DV3) / Circle (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DV3) / Circle (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DV3) / Circle (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DV3) / Scalebane (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DV3) / Scalebane (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DV3) / Scalebane (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DV3) / Scalebane (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DV3) / Thunderous (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DV3) / Thunderous (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DV3) / Thunderous (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DV3) / Thunderous (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eggnog (DV3) / Diurna (DCS3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog (DV3) / Diurna (DH3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eggnog (DV3) / Diurna (DM3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eggnog (DV3) / Diurna (DV3)"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eggnog (DV3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DCS3) / Unstable (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DCS3) / Unstable (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DCS3) / Unstable (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DCS3) / Unstable (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DCS3) / Eternal (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DCS3) / Eternal (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DCS3) / Eternal (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DCS3) / Eternal (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DCS3) / Platinum (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DCS3) / Platinum (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DCS3) / Platinum (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DCS3) / Platinum (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DCS3) / Bloodied (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DCS3) / Bloodied (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DCS3) / Bloodied (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DCS3) / Bloodied (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DCS3) / Circle (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DCS3) / Circle (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DCS3) / Circle (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DCS3) / Circle (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DCS3) / Scalebane (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DCS3) / Scalebane (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DCS3) / Scalebane (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DCS3) / Scalebane (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DCS3) / Thunderous (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DCS3) / Thunderous (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DCS3) / Thunderous (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DCS3) / Thunderous (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx (DCS3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DH3) / Unstable (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DH3) / Unstable (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DH3) / Unstable (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DH3) / Unstable (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DH3) / Eternal (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DH3) / Eternal (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DH3) / Eternal (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DH3) / Eternal (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DH3) / Platinum (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DH3) / Platinum (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DH3) / Platinum (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DH3) / Platinum (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DH3) / Bloodied (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DH3) / Bloodied (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DH3) / Bloodied (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DH3) / Bloodied (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DH3) / Circle (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DH3) / Circle (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DH3) / Circle (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DH3) / Circle (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DH3) / Scalebane (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DH3) / Scalebane (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DH3) / Scalebane (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DH3) / Scalebane (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DH3) / Thunderous (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DH3) / Thunderous (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DH3) / Thunderous (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DH3) / Thunderous (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Onyx (DH3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DM3) / Unstable (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DM3) / Unstable (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DM3) / Unstable (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DM3) / Unstable (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DM3) / Eternal (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DM3) / Eternal (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DM3) / Eternal (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DM3) / Eternal (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DM3) / Platinum (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DM3) / Platinum (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DM3) / Platinum (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DM3) / Platinum (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DM3) / Bloodied (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DM3) / Bloodied (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DM3) / Bloodied (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DM3) / Bloodied (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DM3) / Circle (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DM3) / Circle (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DM3) / Circle (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DM3) / Circle (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DM3) / Scalebane (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DM3) / Scalebane (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DM3) / Scalebane (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DM3) / Scalebane (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DM3) / Thunderous (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DM3) / Thunderous (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DM3) / Thunderous (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DM3) / Thunderous (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Onyx (DM3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DV3) / Unstable (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Unstable (DCS3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DV3) / Unstable (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Unstable (DH3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DV3) / Unstable (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Unstable (DM3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DV3) / Unstable (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Unstable (DV3)"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DV3) / Eternal (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DV3) / Eternal (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DV3) / Eternal (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DV3) / Eternal (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DV3) / Platinum (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DV3) / Platinum (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DV3) / Platinum (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DV3) / Platinum (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DV3) / Bloodied (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DV3) / Bloodied (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DV3) / Bloodied (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DV3) / Bloodied (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DV3) / Circle (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DV3) / Circle (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DV3) / Circle (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DV3) / Circle (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DV3) / Scalebane (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DV3) / Scalebane (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DV3) / Scalebane (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DV3) / Scalebane (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Onyx (DV3) / Thunderous (DCS3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx (DV3) / Thunderous (DH3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Onyx (DV3) / Thunderous (DM3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Onyx (DV3) / Thunderous (DV3)"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Onyx (DV3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DCS3) / Eternal (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DCS3) / Eternal (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DCS3) / Eternal (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DCS3) / Eternal (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DCS3) / Platinum (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DCS3) / Platinum (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DCS3) / Platinum (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DCS3) / Platinum (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DCS3) / Bloodied (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DCS3) / Bloodied (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DCS3) / Bloodied (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DCS3) / Bloodied (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DCS3) / Circle (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DCS3) / Circle (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DCS3) / Circle (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DCS3) / Circle (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DCS3) / Scalebane (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DCS3) / Scalebane (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DCS3) / Scalebane (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DCS3) / Scalebane (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DCS3) / Thunderous (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DCS3) / Thunderous (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DCS3) / Thunderous (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DCS3) / Thunderous (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DCS3) / Diurna (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DCS3) / Diurna (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DCS3) / Diurna (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DCS3) / Diurna (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable (DCS3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DH3) / Eternal (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DH3) / Eternal (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DH3) / Eternal (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DH3) / Eternal (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DH3) / Platinum (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DH3) / Platinum (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DH3) / Platinum (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DH3) / Platinum (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DH3) / Bloodied (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DH3) / Bloodied (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DH3) / Bloodied (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DH3) / Bloodied (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DH3) / Circle (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DH3) / Circle (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DH3) / Circle (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DH3) / Circle (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DH3) / Scalebane (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DH3) / Scalebane (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DH3) / Scalebane (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DH3) / Scalebane (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DH3) / Thunderous (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DH3) / Thunderous (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DH3) / Thunderous (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DH3) / Thunderous (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DH3) / Diurna (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DH3) / Diurna (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DH3) / Diurna (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DH3) / Diurna (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Unstable (DH3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DM3) / Eternal (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DM3) / Eternal (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DM3) / Eternal (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DM3) / Eternal (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DM3) / Platinum (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DM3) / Platinum (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DM3) / Platinum (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DM3) / Platinum (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DM3) / Bloodied (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DM3) / Bloodied (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DM3) / Bloodied (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DM3) / Bloodied (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DM3) / Circle (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DM3) / Circle (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DM3) / Circle (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DM3) / Circle (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DM3) / Scalebane (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DM3) / Scalebane (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DM3) / Scalebane (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DM3) / Scalebane (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DM3) / Thunderous (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DM3) / Thunderous (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DM3) / Thunderous (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DM3) / Thunderous (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DM3) / Diurna (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DM3) / Diurna (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DM3) / Diurna (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DM3) / Diurna (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Unstable (DM3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DV3) / Eternal (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Eternal (DCS3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DV3) / Eternal (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Eternal (DH3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DV3) / Eternal (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Eternal (DM3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DV3) / Eternal (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Eternal (DV3)"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DV3) / Platinum (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DV3) / Platinum (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DV3) / Platinum (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DV3) / Platinum (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DV3) / Bloodied (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DV3) / Bloodied (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DV3) / Bloodied (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DV3) / Bloodied (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DV3) / Circle (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DV3) / Circle (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DV3) / Circle (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DV3) / Circle (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DV3) / Scalebane (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DV3) / Scalebane (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DV3) / Scalebane (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DV3) / Scalebane (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DV3) / Thunderous (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DV3) / Thunderous (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DV3) / Thunderous (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DV3) / Thunderous (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Unstable (DV3) / Diurna (DCS3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable (DV3) / Diurna (DH3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Unstable (DV3) / Diurna (DM3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Unstable (DV3) / Diurna (DV3)"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Unstable (DV3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DCS3) / Platinum (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DCS3) / Platinum (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DCS3) / Platinum (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DCS3) / Platinum (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DCS3) / Bloodied (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DCS3) / Bloodied (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DCS3) / Bloodied (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DCS3) / Bloodied (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DCS3) / Circle (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DCS3) / Circle (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DCS3) / Circle (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DCS3) / Circle (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DCS3) / Scalebane (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DCS3) / Scalebane (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DCS3) / Scalebane (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DCS3) / Scalebane (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DCS3) / Thunderous (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DCS3) / Thunderous (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DCS3) / Thunderous (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DCS3) / Thunderous (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DCS3) / Diurna (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DCS3) / Diurna (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DCS3) / Diurna (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DCS3) / Diurna (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal (DCS3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DH3) / Platinum (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DH3) / Platinum (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DH3) / Platinum (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DH3) / Platinum (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DH3) / Bloodied (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DH3) / Bloodied (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DH3) / Bloodied (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DH3) / Bloodied (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DH3) / Circle (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DH3) / Circle (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DH3) / Circle (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DH3) / Circle (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DH3) / Scalebane (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DH3) / Scalebane (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DH3) / Scalebane (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DH3) / Scalebane (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DH3) / Thunderous (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DH3) / Thunderous (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DH3) / Thunderous (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DH3) / Thunderous (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DH3) / Diurna (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DH3) / Diurna (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DH3) / Diurna (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DH3) / Diurna (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Eternal (DH3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DM3) / Platinum (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DM3) / Platinum (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DM3) / Platinum (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DM3) / Platinum (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DM3) / Bloodied (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DM3) / Bloodied (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DM3) / Bloodied (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DM3) / Bloodied (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DM3) / Circle (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DM3) / Circle (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DM3) / Circle (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DM3) / Circle (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DM3) / Scalebane (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DM3) / Scalebane (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DM3) / Scalebane (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DM3) / Scalebane (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DM3) / Thunderous (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DM3) / Thunderous (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DM3) / Thunderous (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DM3) / Thunderous (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DM3) / Diurna (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DM3) / Diurna (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DM3) / Diurna (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DM3) / Diurna (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Eternal (DM3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DV3) / Platinum (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Platinum (DCS3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DV3) / Platinum (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Platinum (DH3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DV3) / Platinum (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Platinum (DM3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DV3) / Platinum (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Platinum (DV3)"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DV3) / Bloodied (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DV3) / Bloodied (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DV3) / Bloodied (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DV3) / Bloodied (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DV3) / Circle (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DV3) / Circle (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DV3) / Circle (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DV3) / Circle (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DV3) / Scalebane (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DV3) / Scalebane (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DV3) / Scalebane (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DV3) / Scalebane (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DV3) / Thunderous (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DV3) / Thunderous (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DV3) / Thunderous (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DV3) / Thunderous (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Eternal (DV3) / Diurna (DCS3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal (DV3) / Diurna (DH3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Eternal (DV3) / Diurna (DM3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Eternal (DV3) / Diurna (DV3)"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Eternal (DV3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DCS3) / Bloodied (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DCS3) / Bloodied (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DCS3) / Bloodied (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DCS3) / Bloodied (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DCS3) / Circle (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DCS3) / Circle (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DCS3) / Circle (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DCS3) / Circle (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DCS3) / Scalebane (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DCS3) / Scalebane (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DCS3) / Scalebane (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DCS3) / Scalebane (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DCS3) / Thunderous (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DCS3) / Thunderous (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DCS3) / Thunderous (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DCS3) / Thunderous (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DCS3) / Diurna (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DCS3) / Diurna (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DCS3) / Diurna (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DCS3) / Diurna (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum (DCS3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DH3) / Bloodied (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DH3) / Bloodied (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DH3) / Bloodied (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DH3) / Bloodied (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DH3) / Circle (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DH3) / Circle (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DH3) / Circle (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DH3) / Circle (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DH3) / Scalebane (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DH3) / Scalebane (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DH3) / Scalebane (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DH3) / Scalebane (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DH3) / Thunderous (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DH3) / Thunderous (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DH3) / Thunderous (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DH3) / Thunderous (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DH3) / Diurna (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DH3) / Diurna (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DH3) / Diurna (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DH3) / Diurna (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Platinum (DH3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DM3) / Bloodied (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DM3) / Bloodied (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DM3) / Bloodied (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DM3) / Bloodied (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DM3) / Circle (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DM3) / Circle (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DM3) / Circle (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DM3) / Circle (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DM3) / Scalebane (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DM3) / Scalebane (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DM3) / Scalebane (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DM3) / Scalebane (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DM3) / Thunderous (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DM3) / Thunderous (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DM3) / Thunderous (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DM3) / Thunderous (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DM3) / Diurna (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DM3) / Diurna (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DM3) / Diurna (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DM3) / Diurna (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Platinum (DM3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DV3) / Bloodied (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Bloodied (DCS3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DV3) / Bloodied (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Bloodied (DH3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DV3) / Bloodied (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Bloodied (DM3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DV3) / Bloodied (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Bloodied (DV3)"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DV3) / Circle (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DV3) / Circle (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DV3) / Circle (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DV3) / Circle (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DV3) / Scalebane (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DV3) / Scalebane (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DV3) / Scalebane (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DV3) / Scalebane (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DV3) / Thunderous (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DV3) / Thunderous (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DV3) / Thunderous (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DV3) / Thunderous (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Platinum (DV3) / Diurna (DCS3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum (DV3) / Diurna (DH3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Platinum (DV3) / Diurna (DM3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Platinum (DV3) / Diurna (DV3)"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Platinum (DV3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DCS3) / Circle (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DCS3) / Circle (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DCS3) / Circle (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DCS3) / Circle (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DCS3) / Scalebane (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DCS3) / Scalebane (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DCS3) / Scalebane (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DCS3) / Scalebane (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DCS3) / Thunderous (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DCS3) / Thunderous (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DCS3) / Thunderous (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DCS3) / Thunderous (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DCS3) / Diurna (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DCS3) / Diurna (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DCS3) / Diurna (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DCS3) / Diurna (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied (DCS3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DH3) / Circle (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DH3) / Circle (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DH3) / Circle (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DH3) / Circle (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DH3) / Scalebane (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DH3) / Scalebane (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DH3) / Scalebane (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DH3) / Scalebane (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DH3) / Thunderous (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DH3) / Thunderous (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DH3) / Thunderous (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DH3) / Thunderous (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DH3) / Diurna (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DH3) / Diurna (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DH3) / Diurna (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DH3) / Diurna (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Bloodied (DH3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DM3) / Circle (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DM3) / Circle (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DM3) / Circle (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DM3) / Circle (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DM3) / Scalebane (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DM3) / Scalebane (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DM3) / Scalebane (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DM3) / Scalebane (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DM3) / Thunderous (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DM3) / Thunderous (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DM3) / Thunderous (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DM3) / Thunderous (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DM3) / Diurna (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DM3) / Diurna (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DM3) / Diurna (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DM3) / Diurna (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Bloodied (DM3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DV3) / Circle (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Circle (DCS3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DV3) / Circle (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Circle (DH3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DV3) / Circle (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Circle (DM3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DV3) / Circle (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Circle (DV3)"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DV3) / Scalebane (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DV3) / Scalebane (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DV3) / Scalebane (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DV3) / Scalebane (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DV3) / Thunderous (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DV3) / Thunderous (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DV3) / Thunderous (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DV3) / Thunderous (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Bloodied (DV3) / Diurna (DCS3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied (DV3) / Diurna (DH3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Bloodied (DV3) / Diurna (DM3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Bloodied (DV3) / Diurna (DV3)"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Bloodied (DV3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DCS3) / Scalebane (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DCS3) / Scalebane (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DCS3) / Scalebane (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DCS3) / Scalebane (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DCS3) / Thunderous (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DCS3) / Thunderous (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DCS3) / Thunderous (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DCS3) / Thunderous (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DCS3) / Diurna (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DCS3) / Diurna (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DCS3) / Diurna (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DCS3) / Diurna (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle (DCS3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DH3) / Scalebane (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DH3) / Scalebane (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DH3) / Scalebane (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DH3) / Scalebane (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DH3) / Thunderous (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DH3) / Thunderous (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DH3) / Thunderous (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DH3) / Thunderous (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DH3) / Diurna (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DH3) / Diurna (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DH3) / Diurna (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DH3) / Diurna (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Circle (DH3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DM3) / Scalebane (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DM3) / Scalebane (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DM3) / Scalebane (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DM3) / Scalebane (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DM3) / Thunderous (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DM3) / Thunderous (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DM3) / Thunderous (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DM3) / Thunderous (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DM3) / Diurna (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DM3) / Diurna (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DM3) / Diurna (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DM3) / Diurna (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Circle (DM3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DV3) / Scalebane (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Scalebane (DCS3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DV3) / Scalebane (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Scalebane (DH3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DV3) / Scalebane (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Scalebane (DM3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DV3) / Scalebane (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Scalebane (DV3)"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DV3) / Thunderous (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DV3) / Thunderous (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DV3) / Thunderous (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DV3) / Thunderous (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Circle (DV3) / Diurna (DCS3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle (DV3) / Diurna (DH3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Circle (DV3) / Diurna (DM3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Circle (DV3) / Diurna (DV3)"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Circle (DV3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Scalebane (DCS3) / Thunderous (DCS3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Scalebane (DCS3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Scalebane (DCS3) / Thunderous (DH3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Scalebane (DCS3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Scalebane (DCS3) / Thunderous (DM3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Scalebane (DCS3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Scalebane (DCS3) / Thunderous (DV3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Scalebane (DCS3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Scalebane (DCS3) / Diurna (DCS3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Scalebane (DCS3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Scalebane (DCS3) / Diurna (DH3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Scalebane (DCS3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Scalebane (DCS3) / Diurna (DM3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Scalebane (DCS3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Scalebane (DCS3) / Diurna (DV3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Scalebane (DCS3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Scalebane (DH3) / Thunderous (DCS3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Scalebane (DH3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Scalebane (DH3) / Thunderous (DH3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Scalebane (DH3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Scalebane (DH3) / Thunderous (DM3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Scalebane (DH3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Scalebane (DH3) / Thunderous (DV3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Scalebane (DH3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Scalebane (DH3) / Diurna (DCS3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Scalebane (DH3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Scalebane (DH3) / Diurna (DH3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Scalebane (DH3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Scalebane (DH3) / Diurna (DM3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Scalebane (DH3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Scalebane (DH3) / Diurna (DV3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Scalebane (DH3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Scalebane (DM3) / Thunderous (DCS3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Scalebane (DM3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Scalebane (DM3) / Thunderous (DH3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Scalebane (DM3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Scalebane (DM3) / Thunderous (DM3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Scalebane (DM3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Scalebane (DM3) / Thunderous (DV3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Scalebane (DM3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Scalebane (DM3) / Diurna (DCS3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Scalebane (DM3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Scalebane (DM3) / Diurna (DH3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Scalebane (DM3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Scalebane (DM3) / Diurna (DM3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Scalebane (DM3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Scalebane (DM3) / Diurna (DV3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Scalebane (DM3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Scalebane (DV3) / Thunderous (DCS3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Scalebane (DV3) / Thunderous (DCS3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Scalebane (DV3) / Thunderous (DH3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Scalebane (DV3) / Thunderous (DH3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Scalebane (DV3) / Thunderous (DM3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Scalebane (DV3) / Thunderous (DM3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Scalebane (DV3) / Thunderous (DV3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Scalebane (DV3) / Thunderous (DV3)"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Scalebane (DV3) / Diurna (DCS3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Scalebane (DV3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Scalebane (DV3) / Diurna (DH3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Scalebane (DV3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Scalebane (DV3) / Diurna (DM3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Scalebane (DV3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Scalebane (DV3) / Diurna (DV3)"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Scalebane (DV3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Thunderous (DCS3) / Diurna (DCS3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Thunderous (DCS3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Thunderous (DCS3) / Diurna (DH3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Thunderous (DCS3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Thunderous (DCS3) / Diurna (DM3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Thunderous (DCS3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Thunderous (DCS3) / Diurna (DV3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Thunderous (DCS3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Thunderous (DH3) / Diurna (DCS3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Thunderous (DH3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Thunderous (DH3) / Diurna (DH3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Thunderous (DH3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Thunderous (DH3) / Diurna (DM3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Thunderous (DH3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Thunderous (DH3) / Diurna (DV3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_haste_3
  profileset."Thunderous (DH3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Thunderous (DM3) / Diurna (DCS3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Thunderous (DM3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Thunderous (DM3) / Diurna (DH3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Thunderous (DM3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Thunderous (DM3) / Diurna (DM3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Thunderous (DM3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Thunderous (DM3) / Diurna (DV3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_mastery_3
  profileset."Thunderous (DM3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  
  profileset."Thunderous (DV3) / Diurna (DCS3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Thunderous (DV3) / Diurna (DCS3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Thunderous (DV3) / Diurna (DH3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Thunderous (DV3) / Diurna (DH3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_haste_3
  
  profileset."Thunderous (DV3) / Diurna (DM3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Thunderous (DV3) / Diurna (DM3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_mastery_3
  
  profileset."Thunderous (DV3) / Diurna (DV3)"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_versatility_3
  profileset."Thunderous (DV3) / Diurna (DV3)"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_versatility_3
  `;
