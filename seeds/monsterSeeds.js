const { Monster } = require("../models");

const monsterData = [
  {
    name: "Anoksom",
    description:
      "Tending to stand on one leg, this monster somewhat resembles an umbrella. The Aknosom is highly territorial; it will spread out its wings and show off its characteristics comb to scare off threats. It also bears flammable venom that burns fiercely and lingers on the ground when lit. Draw the beast to water for an easier fight.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/aknosom_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Almudron",
    description:
      "As its name implies, Almudron spends a great deal of time lurking in mud—at least until it emerges to smother approaching prey. From its tail oozes a strange golden fluid, which Almudron uses to dissolve the ground beneath its prey, arresting them in a mire so that it can drag them under. When enraged, it produces more fluid, turning the mud golden. When you see gold, watch out!",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/almudron_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Anjanath",
    description:
      "The belligerent monster will attack anything without hesitation. The membrane along its tail fans out when it is provoked—a behavior theorized to be either an act of intimidation or thermoregulation, as it has been known to do so when it breathes fire.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/anjanath_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Apex Arzuros",
    description:
      "An Arzuros so mighty, it was crowned an Apex. It is eternally possessed by wrath and terror, possibly due to the myriad wounds that cover its body. Its forelegs are massive, deft removers of any who'd stand in their way. The call of an Apex unleashes its tortured anger on nearby beasts, driving them into a frenzy.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/apex_arzuros-icon-mhr-wiki-guide.png",
  },
  {
    name: "Apex Diablos",
    description:
      "A Diablos so mighty, it was crowned an Apex. It is eternally possessed by wrath and terror, possibly due to the myriad wounds that cover its body. Its supremely developed horns add to the lethality of its charge. The call of an Apex unleashes its tortured anger on nearby beasts, driving them into a frenzy.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/apex_diablos-icon-mhr-wiki-guide.png",
  },
  {
    name: "Apex Mizutsune",
    description:
      "A Mizutsune so mighty, it was crowned an Apex. It is eternally possessed by wrath and terror, possibly due to the myriad wounds that cover its body. Its bubbles and huge tail have no trouble sending foes packing. The call of an Apex unleashes its tortured anger on nearby beasts, driving them into a frenzy.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/apex_mizutsune-icon-mhr-wiki-guide.png",
  },
  {
    name: "Apex Rathalos",
    description:
      "A Rathalos so mighty, it was crowned an Apex. It is eternally possessed by wrath and tremor, possibly due to the myriad wounds that covers its body. Its every breath releases flaming jets that single the very air. The call of an Apex unleashes its tortured anger on nearby beasts, driving them into a frenzy",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/apex_rathalos-icon-mhr-wiki-guide.png",
  },
  {
    name: "Apex Rathian",
    description:
      "A Rathian so mighty, it was crowned an Apex. It is eternally possessed by wrath and terror, possibly due to the myriad wounds that cover its body. Its tail oozes a venom far deadlier than any of a normal monster. The call of an Apex unleashes its tortured anger on nearby beasts, driving them into a frenzy.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/apex_rathian-icon-mhr-wiki-guide.png",
  },
  {
    name: "Apex Zinogre",
    description:
      "A Zinogre so mighty, it was crowned an Apex. Its body is covered in scars and wounds as if it had been caught in a storm, and it's seemingly always dominated by wrath and terror. Its forelegs -- and their every strike -- brim with ferocious sparks. The call of an Apex unleashes its tortured anger on nearby beasts, driving them into a frenzy.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/apex_zinogre-icon-mhr-wiki-guide.png",
  },
  {
    name: "Arzuros",
    description:
      "Beasts known to dwell in humid forest and mountain regions. Though known more for fishing and standing upright to collect honey, their thick claws and heavy forearm plating allow them to deliver powerful blows to any aggressor. ",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/arzuros_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Astalos",
    description:
      "Large Flying Wyverns with crest-shaped organs that let them control vast amounts of electricity. Astalos vibrate these organs on their head, forked tail, and brilliant wings to charge the respective body part with electricity, yielding tremendous strength and an amplified attack range. Violent to a fault, witnesses have observed them using all their might to drive intruders from their territory.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/astalos_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Aurora Somnacanth",
    description:
      "Light illuminates the dust scattered around this subspecies, making their fantastical appearance shimmer softly. Aurora Somnacanth sprays icy blasts in place of sleeping powder, attacking all who dare enter their territory. They use the permanent cold emanating from their bodies to freeze the vicinity, and then the frozen surface to move around swiftly.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/aurora_somnacanth_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Barioth",
    description:
      "Wyverns that rule the eternally frozen Tundra. Barioth use their forelegs, tail and their spiked scales to traverse the slippery ice with ease; this ability makes them very difficult to keep up with.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/barioth_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Barroth",
    description:
      "Barroth usually remain beneath the mud, perhaps to shield themselves from heat; they are even known to attack by flinging mud. They will charge in a frenzy at anything that disturbs their bogs.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/barroth_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Basarios",
    description:
      "These juvenile Gravios are famous for their rock-hard carapaces. They often burrow underground, mimicking rocks and savaging oblivious miners. Because their carapaces are tougher than that of a full-grown Gravios, they'll attack a threat by charging at it. They are also known to emit a poisonous gas.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/basarios_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Bazelgeuse",
    description:
      'A nefarious flying wyvern that travels the world in search of prey. It scatters its own explosives scales over a wide area to prey on whatever gets caught in the blast. In some places, this has earned it the nickname "Bomber Wyvern".',
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/bazelgeuse-icon-mhr-wiki-guide.png",
  },
  {
    name: "Bishaten",
    description:
      "A monster with a distinctive tail. While it is omnivorous, it has a preference for fruit, and keeps various fruits with all kinds of effects in its belly pouch. An incredibly curious beast, it enjoys playing tricks on people, and has been seen to bat fruit at its prey using its tail.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/bishaten_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Blood Orange Bishaten",
    description:
      "A subspecies named for their auburn fur. Inquisitive by nature, Blood Orange Bishaten can even appear near human habitats. Their belly pouch is stuffed with combustible pinecones, and this subspecies has a distinct and focused fire breath. The breath itself isn't as dangerous as the pinecones it ignites. Reports indicate that it's possible to topple these monsters while they balance on their tails.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/blood_orange_bishaten_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Chameleos",
    description:
      "Precious few sightings of this elder dragon have been recorded, leading to claims it can vanish into its environment like a chameleon — hence its name. Witnesses report that, when enraged, it can spew a fog-like breath, which seems to come out of nowhere, and enhance its strength by licking the pollen from Petalaces.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/chameleos-icon-mhr-wiki-guide.png",
  },
  {
    name: "Crimson Glow Valstrax",
    description:
      'A mutant Valstrax fearsomely dubbed the "Crimson Glow." This elder dragon typically secludes itself in the upper atmosphere, but it has been driven mad by its own rampant energy, causing it to lash out at anything in its sight. Once it sights its prey, it swoops down, trampling them beneath its shifting wingblades. Several have been sighted all over, so be prepared to encounter one at any time.',
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/crimson_glow_valstrax-icon-mhr-wiki-guide.png",
  },
  {
    name: "Daimyo Hermitaur",
    description:
      "Large Carapaceons that live in coastal regions and sandy soil. Daimyo Hermitaurs use their massive claws to guard themselves against enemy attacks. These creatures wear wyvern skulls on their backs, unlike the shells carried in their infancy. These shells serve not only as protection, but also as a method for attacking prey. They are highly valued for their materials—their brains in particular.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/daimyo_hermitaur_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Diablos",
    description:
      'Known as the "Tyrant of the Desert." The Diablos is extremely territorial and will use its massive horns to charge at invaders. Diablos have the ability to borrow underground and use this ability to strike from below, however, their sensitive ears make them susceptible to Sonic Bombs. Despite their predatory appearance, they are herbivorous and mostly feed on cactus.',
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/diablos_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Espinas",
    description:
      "Flying Wyverns known for the red spikes on their tough green frame, forming both a means of attack and defense, thus generally keeping foes at bay. As a result, they are often seen sprawled out and relaxing in their domain. Once they sense danger, however, they expand their blood vessels to turn their hide and wing membranes a bright red, and they will run riot with noteworthy brutality. Espinas are notable for this dual nature of theirs—unconcerned by their surroundings to the extent that they sleep openly and often, but also capable of displaying a profoundly savage nature when they feel threatened.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/espinas_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Furious Rajang",
    description:
      "Furious Rajang are Rajang variants that are covered in golden fur. Normally Rajang return to their black-furred state after being agitated for a time to conserve energy, but these beasts have lost the ability to curb their anger. Outclassing the standard Rajang attack power, they assault with seething rage. At the apex of their fury they become enraged and turn into destructive demons with electrified manes.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/furious_rajang_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Gaismagorm",
    description:
      "A gargantuan monster living in the darkest depths since ancient times. Gaismagorm's rock-like forearms boast tenacious strength which allows it to burrow underground. It has a symbiotic relationship with the Qurio, and feeds on their life force for energy. Once it has chosen a place to nest, it collapses the surrounding rock bed to create an opening to the surface. The opening forms a massive crater in which it releases the Qurio through.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/gaismagorm_large_monsters_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Garangolm",
    description:
      "A monster characterized by its massive and rigid body. Garangolm are generally placid, living in regions with fertile soil. Their sap-like fluids can promote plant growth, forging a symbiotic relationship with flora that grows in their bodies. They can also use that sap to harden plants or the surrounding soil, outfitting their bodies and enhancing their attacks.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/garangolm_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Gore Magala",
    description:
      "Gore Magala possess wings with black, shroud-like membrane. They lack visual receptors, and so to make up for this they heighten their senses by scattering scales from their wings to ascertain the locations of lifeforms. At the peak of their senses, feelers extend from their head, their wings unfurl, and they become frenzied. By this point, the Gore Magala have used their scales to precisely detect where its opponents may lie. In their frenzied state, Gore Magala are known to slam into the ground powerfully enough to cause the earth to rupture and protrude, use their massive claws to attempt to subdue foes or prey, or unleash a variety of other devastating attacks.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/gore_magala_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Goss Harag",
    description:
      "A monster native to ice-cold climates. Covered in fur so thick it keeps out the harsh frost, it roams the snowy plains in search of prey. It can inhale the cold air to freeze its own bodily fluids and then spit them out to create icy blades on its arms. When riled up, the Goss Harag turns red and becomes exceedingly dangerous.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/goss_harag_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Great Baggi",
    description: "A carnivorous bird wyvern. Noted for their projecting cranial crests and bluish-white skin that's adapted to snowy climates. Great Baggi craftily command other Baggi to surround their prey and stun them with a tranquilizing fluid.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/great_baggi_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Great Izuchi",
    description: "The Great Izuchi is the alpha of its pack, identified by its larger build, upended white fur, and scythe-like tail. A Great Izuchi forms a herd of many smaller Izuchi and selects two from the group to accompany it on territory patrols. Once it spots its prey or senses danger, the Great Izuchi issues commands to its fellow Izuchi and coordinates their movements. Take care that you don't get overwhelmed!",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/great_izuchi_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Great Wroggi",
    description: "Wroggi are bird wyverns that travel in packs that are led by the largest and most toxic member. Be careful when one raises its head and its poison sac expands -- that signals that it's about to spit a cloud of poisonous mist.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/great_wroggi_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Jyuratodus",
    description: "A piscine wyvern that inhabits swamps, utilizing the mud there to hunt and survive. It wallows in the mire to maximize cutaneous respiration and preserve the toughness of its scales. The sludge it spits is highly viscous, so watch where you step, lest you get stuck in it.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/jyuratodus_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Khezu",
    description: "Khezu are loathsome wyverns that dwell in caves and other dark places. All but blind, Khezu hunt by smell. Their tail has evolved to cling to walls and ceilings. After using an electric shock to paralyze their prey, they extend their long neck and pounce.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/khezu_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Kulu-Ya-Ku",
    description: "A bird wyvern that has developed limbs capable of carrying objects. It has been spotted stealing eggs from nests. If attacked while carrying an egg, it will drop the egg in fright and flee. When engaged, a Kulu-Ya-Ku will dig up a small boulder to shield itself against threats or use in its attacks.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/kulu-ya-ku_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Kushala Daora",
    description: "It's difficult to even get close to one of these metallic elder dragons, but some claim better odds if the creature is weakened with poison, or has its horn broken, limiting the amount of wind pressure it can muster.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/kushala_daora-icon-mhr-wiki-guide.png",
  },
  {
    name: "Lagombi",
    description: "Fanged, long-eared beasts whose warm pelts and thick layers of fat help them survive in cold climates. Though mainly herbivores, Lagombi occasionally make use of their exceptional hearing and ability to glide on ice to sneak up on prey.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/lagombi_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Lunagaron",
    description: "Lunagaron have an organ that chills the air they inhale, circulating it throughout their body in a unique form of thermoregulation. They can travel long distances and endure environmental changes, allowing them to occupy a wide range of habitats. They usually walk on all fours, but can stand on two legs by shutting down their cooling mechanism, spiking their body temp to expand their muscles.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/lunagaron_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Magma Almudron",
    description: "Unlike normal Almudron, Magma Almudron live in the Lava Caverns, and can manipulate magma instead of mud. They secrete a special liquid that melts the ground, allowing them to move freely through the earth. Known for their aggressive nature, they become extremely agitated when trespassers set foot on their turf, attacking them unrelentingly.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/magma_almudron_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Magnamalo",
    description: 'A monster with a carapace like tempered steel armor. The vapor around it is actually the expelling of trapped gases from the hordes of monsters Magnamalo has consumed. This has earned it the moniker "Wyvern of Malice." Its shrouded swings can inflict hellfireblight, which causes one to combust either spontaneously or when hit. Use a Deodorant or a Wirebug to rid yourself of hellfire.',
    img: "",
  },
  {
    name: "Malzeno",
    description: 'A dragon covered with elegant silver scales. It uses the Qurio to drain the life energy of other living creatures, creeping around at night and attacking its prey from behind. It appears almost regal to start with, but after draining enough energy, it can turn a violent, fresh-blood crimson. This form is known as the "Bloodening" and is widely feared.',
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/malzeno_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Mizutsune",
    description: "A specially evolved Leviathan with a sleek, lithe body, Mizutsune can secrete a peculiar foam that covers its foes in immobilizing bubbles. Once its prey's movement is impaired, it closes in with spry, dance-like movements.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/mizutsune_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Nargacuga",
    description: "Flying wyverns that have evolved to live in thickly wooded areas. Covered in jet black fur, these cunning predators stalk their prey from the shadows and attack with ferocious speed. Their massive tails are as dexterous as they are deadly, and powerful enough to slay smaller monsters with one strike.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/nargacuga_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Narwa the Allmother",
    description: 'Having absorbed the lifeforce of her "king," Narwa has transformed and become imbued with new power. She now possesses Ibushis mastery over wind as well as her own control over thunder, and lusts for utter annihilation.',
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/narwa_the_allmother-icon-mhr-wiki-guide.png",
  },
  {
    name: "Pukei-Pukei",
    description: "A bird wyvern known to store toxins within its body. It uses its tongue like a whip and can stretch or shrink it at will, allowing it to grab up food. As a defense against threats, Pukei-Pukei have numerous toxic attacks. Keep an eye on both its mouth and tail!",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/pukei_pukei_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Pyre Rakna-Kadaki",
    description: "A subspecies of Rakna-Kadaki filled with explosive material, their bodies are covered in a dark red, explosion-resistant webbing. On offense, they strike their forelimbs like flints to induce explosions. An advanced chain of command lets them direct their offspring with a special sound-producing organ. Connecting special detonation threads to offspring in the area lets them expand the explosive area to their positions.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/pyre_rakna-kadaki_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Rajang",
    description: "An ultra-aggressive creature that is rarely sighted and seldom survived. Those that have survived report that it exhibits a strange attack. Rajang are said to be loners, and this isolated life has made it difficult to pin down its territorial leanings. When angered, part of its pelt turns a golden color.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/rajang_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Rakna-Kadaki",
    description: "A Rakna-Kadaki is usually seen covered in sticky webbing. Clinging to its abdomen are its offspring, known as Rachnoid, which it controls using the flammable gas that builds up there. Rachnoid spit fire, capture prey, and support the Rakna-Kadaki's massive body. As their numbers dwindle, the beast with hatch more, at which point it is extremely dangerous.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/rakna-kadaki_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Rathalos",
    description: 'Terrible wyverns called "Kings of the Skies." Along with Rathian, they stake wide territories centered around their nests. Rathalos descend on invaders from the sky, attacking with poison claws and a breath of fire.',
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/rathalos_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Rathian",
    description: 'Fire-breathing female wyverns, also known as the "Queens of the Land." With powerful legs and poison-secreting tails, they hunt mainly on the ground. Sometimes seen preying as a couple, Rathian and Rathalos cooperate well.',
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/rathian_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Royal Ludroth",
    description: "A larger male form of the regular Ludroth. Royal Ludroth use their sponge-like mane to absorb water and keep from drying out on land. Once the sponge loses moisture, they will seek out water to recover. They also spew mucus to trip up their prey.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/royal_ludroth_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Scorned Magnamalo",
    description: 'A Magnamalo variant that achieves an even more twisted, malevolent form. Filled with hatred, they are known as "Scorned Magnamalo." Shrouded in Hellfire at all times, they also boast larger arm blades and harder armor plating. During battles, they have been spotted focusing their Hellfire and swinging it like a blade.',
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/magnamalo_sb_large_monster_icons_mhr_wiki_guide_200px.png",
  },
  {
    name: "Seregios",
    description: "Large Flying Wyverns with sharp, blade-like scales covering their body. Seregios are well-known as extremely territorial and belligerent creatures, wielding their aerial mobility and powerful hind leg attacks in intense combat against other large monsters. Reports have confirmed that Seregios have the ability to launch the scales from their body, inflicting their victims with the Bleeding status.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/seregios_large_monsters_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Shagaru Magala",
    description: "The form taken by Gore Magala once they mature and molt. Gorgeous, glittering scales cover Shagaru Magala, and their divine wings are large enough to wrap around their entire body. According to records, one was once said to have scattered its black scales over an area the size of a mountain, annihilating any and all lifeforms inhabiting that region.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/shagaru_magala_large_monster_icons_mhr_wiki_guide_200px.png",
  },
  {
    name: "Shogun Cenataur",
    description: "These large Carapaceons can be found around volcanoes and in the Flooded Forest. Shogun Ceanataur wield long, developed claws that are usually folded away, but unfurl into terrifying blades when enraged. Shogun Ceanataur, like the Daimyo Hermitaur, are also known to use wyvern skulls as shells. Specimens that do, have been observed using a water jet-like attack.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/shogun_ceanataur_large_monster_icon_mhr_wiki_guide_200px.png",
  },
  {
    name: "Somnacanth",
    description: "A formidable aquatic serpent that crests on moonlit nights--likely why is has often been mistaken for a mermaid. It expels an intoxicating sleep powder from its neck gills and tail, knocking out prey before it can resist. Some Somnacanth sightings tell of this species making use of unusual shells, so exercise caution if you catch one swimming towards you with a shell in its claws.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/somnacanth_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Teostra",
    description: "Brutal elder dragons wreathed in flames that spew blazing fire. Teostra are of such a fierce and deadly nature that the Guild closely monitors their movements.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/teostra-icon-mhr-wiki-guide.png",
  },
  {
    name: "Tetranadon",
    description: "An amphibious monster resembling a frog. Its appetite is infinite, and if it sees anything moving, it will gobble it up, dirt an all. It's theorized that the dirt it consumes builds up in its stomach and aids in digestion. If it eats something that it cannot digest, it will throw it back up. The cranial disc protecting its tender head is said to harden and become a more brilliant blue over time.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/tetranadon_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Thunder Serpent Narwa",
    description: 'Narwa is an elder dragon and Wind Serpent Ibushis "queen." Its thundersacs glow with accumulated electrical charge; it is thought that these organs therefore generate the powerful magnetic field that lifts the creature and anything around it high into the air.',
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/thunder_serpent_narwa_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Tigrex",
    description: "Flying wyverns whose primitive origins are obvious. Prone to violence, they display incredible ferocity with their claws, jaws, and developed limbs. They inhabit a wide area searching for prey, and have even been spotted in regions of harsh cold.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/tigrex_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Tobi-Kadachi",
    description: "A fanged wyvern that flies among the treetops. Its penchant to brush against the ground and the trees as it moves around builds up static electricity within its fur. This action allows it to reach a charged stated, identified by its glowing fur, in which its head and tail attacks are said to be particularly lethal.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/tobi-kadachi_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Volvidon",
    description: "Fanged beasts with thick red carapaces that are resistant to lava. Their rounded bodies are perfect for rolling across hot surfaces, and their long tongues are ideal for capturing insect prey. Their saliva emits a paralyzing toxin that should be avoided.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/volvidon_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Wind Serpent Ibushi",
    description: "A male elder dragon that exhibits inexplicable behaviors such as floating upside down midair. Research indicates that the emission of a special gas from all over its body, and the modulation of this gas, is what allows it to move freely. It shoots air from gills on its arms and tail to fly, creating its own turbulence and soaring to great heights.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/wind_serpent_ibushi_large_monster_monster_hunter_rise_200_200px.png",
  },
  {
    name: "Zinogre",
    description: "Fanged wyverns whose bodies are streaked with electricity. Sharp claws and strong limbs allow them to thrive in mountainous terrain. During hunts, they gather numerous Thunderbugs to boost their power and enter a supercharged state.",
    img: "https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/zinogre_large_monster_monster_hunter_rise_200_200px.png",
  },
];

const seedMonsters = () => Monster.bulkCreate(monsterData);
module.exports = seedMonsters;
