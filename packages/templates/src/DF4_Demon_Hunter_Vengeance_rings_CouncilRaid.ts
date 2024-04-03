/* eslint-disable unicorn/filename-case -- Disabling because this needs to match simc. */
import { dedent } from "ts-dedent";

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const DF4_Demon_Hunter_Vengeance_rings_CouncilRaid = dedent` 
  ptr=1
  
  iterations=10000
  desired_targets=4
  max_time=300
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
  
  profileset."Ring-bound / Titanic"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Ring-bound / Titanic"+=finger2=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  
  profileset."Ring-bound / Eggnog"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Ring-bound / Eggnog"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound / Onyx"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Ring-bound / Onyx"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound / Unstable"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Ring-bound / Unstable"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound / Eternal"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Ring-bound / Eternal"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound / Platinum"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Ring-bound / Platinum"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound / Bloodied"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Ring-bound / Bloodied"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound / Circle"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Ring-bound / Circle"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound / Scalebane"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Ring-bound / Scalebane"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound / Thunderous"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Ring-bound / Thunderous"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Ring-bound / Diurna"+=finger1=ringbound_hourglass,id=193000,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Ring-bound / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic / Eggnog"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Titanic / Eggnog"+=finger2=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic / Onyx"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Titanic / Onyx"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic / Unstable"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Titanic / Unstable"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic / Eternal"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Titanic / Eternal"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic / Platinum"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Titanic / Platinum"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic / Bloodied"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Titanic / Bloodied"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic / Circle"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Titanic / Circle"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic / Scalebane"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Titanic / Scalebane"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic / Thunderous"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Titanic / Thunderous"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Titanic / Diurna"+=finger1=signet_of_titanic_insight,id=192999,bonus_id=9498/9500/9405/8780,gem_id=192922,enchant=devotion_of_critical_strike_3,crafted_stats=36/32,ilevel=522
  profileset."Titanic / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog / Onyx"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog / Onyx"+=finger2=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog / Unstable"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog / Unstable"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog / Eternal"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog / Eternal"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog / Platinum"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog / Platinum"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog / Bloodied"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog / Bloodied"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog / Circle"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog / Circle"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog / Scalebane"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog / Scalebane"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog / Thunderous"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog / Thunderous"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eggnog / Diurna"+=finger1=seal_of_diurnas_chosen,id=195480,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eggnog / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx / Unstable"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx / Unstable"+=finger2=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx / Eternal"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx / Eternal"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx / Platinum"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx / Platinum"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx / Bloodied"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx / Bloodied"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx / Circle"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx / Circle"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx / Scalebane"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx / Scalebane"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Onyx / Thunderous"+=finger1=onyx_impostors_birthright,id=204398,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Onyx / Thunderous"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable / Eternal"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable / Eternal"+=finger2=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable / Platinum"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable / Platinum"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable / Bloodied"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable / Bloodied"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable / Circle"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable / Circle"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable / Scalebane"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable / Scalebane"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable / Thunderous"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable / Thunderous"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Unstable / Diurna"+=finger1=unstable_arcane_loop,id=193633,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Unstable / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal / Platinum"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal / Platinum"+=finger2=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal / Bloodied"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal / Bloodied"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal / Circle"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal / Circle"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal / Scalebane"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal / Scalebane"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal / Thunderous"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal / Thunderous"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Eternal / Diurna"+=finger1=eternal_sentry_ring,id=193804,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Eternal / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum / Bloodied"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum / Bloodied"+=finger2=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum / Circle"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum / Circle"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum / Scalebane"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum / Scalebane"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum / Thunderous"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum / Thunderous"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Platinum / Diurna"+=finger1=platinum_star_band,id=193708,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Platinum / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied / Circle"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied / Circle"+=finger2=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied / Scalebane"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied / Scalebane"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied / Thunderous"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied / Thunderous"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Bloodied / Diurna"+=finger1=bloodied_wedding_ring,id=193671,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Bloodied / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle / Scalebane"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle / Scalebane"+=finger2=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle / Thunderous"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle / Thunderous"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Circle / Diurna"+=finger1=circle_of_ascended_frost,id=193731,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Circle / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Scalebane / Thunderous"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Scalebane / Thunderous"+=finger2=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Scalebane / Diurna"+=finger1=scalebane_signet,id=193768,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Scalebane / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  
  profileset."Thunderous / Diurna"+=finger1=thunderous_downburst_ring,id=193696,bonus_id=10359/1491/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  profileset."Thunderous / Diurna"+=finger2=seal_of_filial_duty,id=195526,bonus_id=10359/1498/6935,gem_id=192922,enchant=devotion_of_critical_strike_3
  `;
