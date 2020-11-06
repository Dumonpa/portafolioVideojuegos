import { Injectable } from '@angular/core';

@Injectable()
export class VideojuegosService {

    private videojuegos: Videojuego[] = [
        {
          compania: 'Nintendo',
          consola: 'Switch',
          nombre: 'The Legend of Zelda: Breath of the Wild',
          desarrollador: 'Nintendo',
          genero: 'Racing',
          bio: 'Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across fields, through forests and to mountain peaks as you discover what has become of the ruined kingdom of Hyrule in this open-air adventure. Explore the wilds of Hyrule any way you like - Climb up towers and mountain peaks in search of new destinations, then set your own path to get there and plunge into the wilderness. Along the way, youll battle towering enemies, hunt wild beasts and gather ingredients for the food and elixirs youll need to sustain you on your journey. More than 100 Shrines of Trials to discover and explore - Shrines dot the landscape, waiting to be discovered in any order you want. Search for them in various ways, and solve a variety of puzzles inside.',
          img: 'assets/img/MK8Deluxe.JPG',
          lanzamiento: '2017-04-28',
          metascore: '92'
        },
        {
          compania: 'Nintendo',
          consola: 'Switch',
          nombre: 'Mario Kart 8 Deluxe',
          desarrollador: 'Nintendo',
          genero: 'Acción y aventura',
          bio: 'Race and battle your friends in the definitive version of Mario Kart 8. Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr. Race your friends in the definitive version of Mario Kart 8, only on Nintendo Switch. Race as every character on every track from the Wii U version, including DLC characters and tracks. Pop some balloons in the revamped Battle mode, complete with Balloon Battle and Bob-omb Blast. Battle on new courses, like Urchin Underpass and Battle Stadium, or returning ones, such as GCN Luigis Mansion and SNES Battle Course 1.',
          img: 'assets/img/MK8Deluxe.JPG',
          lanzamiento: '2017-04-28',
          metascore: '92'
        },
        {
          compania: 'Nintendo',
          consola: 'Gamecube',
          nombre: '007 Agent under fire',
          desarrollador: 'EA',
          genero: 'FPS',
          bio: 'Driven by a completely new and original storyline, James Bond 007: Agent Under Fire is a first-person action game that balances furious action and stealth tactics. An evil world organization has been replacing world leaders with their more docile clones and its up to you to put a stop to it. As Bond, youll encounter villains and allies, both new and familiar, detailed 3D environments, and spy-packed, fast-action gameplay. And dont worry, Q will provide you with all the innovative weapons, sophisticated spy-craft, and state-of-the-art gadgets that Bond fans expect. ',
          img: 'assets/img/007AgentUnderFire.JPG',
          lanzamiento: '2002-03-13',
          metascore: '74'
        },
        {
          compania: 'Nintendo',
          consola: 'Gamecube',
          nombre: 'Crash tag Team Racing',
          desarrollador: 'Radical Entertainment',
          genero: 'Racing',
          bio: ' For the first time ever in a racing game, players will be able to fuse two cars together on the fly to form a super vehicle with the all-new clashing technology. In Crash Tag Team Racing, players can combine their car with an opponents mid-race to make a super-car equipped with a powerful turret gun. When clashed, players can either get behind the wheel and drive or fire an onboard weapon. Each character has his or her own uniquely deadly 360˚ rotating turret. Players can continue the action out of the car where they can explore the entire world on foot and collect upgrades for their cars and unlock bonus tracks.',
          img: 'assets/img/CrashTagTeamRacing.JPG',
          lanzamiento: '2005-10-19',
          metascore: '66'
        },
        {
          compania: 'Sega',
          consola: 'Genesis',
          nombre: 'Aladin',
          desarrollador: 'Virgin',
          genero: 'Aventura',
          bio: 'Aladin, a young orphan, lives in the Orient. His only wealth lies in his small house and an old ring, that formerly belonged to his father. As Aladin has to steal to survive, he wishes deep inside he will become a rich man, to be worth the Princess Jasmines attention. A strange dark sorcerer seems to be willing to help him. But in the country of the Geniuses, Aladin will have to act carefully...',
          img: 'assets/img/Aladin.JPG',
          lanzamiento: '1993-01-01',
          metascore: 'NA'
        },
        {
          compania: 'Play Station',
          consola: 'PlayStation 2',
          nombre: 'Resident Evil 4',
          desarrollador: 'Acclaim',
          genero: 'Accion, Aventura, Horror',
          bio: 'In Resident Evil 4 players are reacquainted with Leon S. Kennedy, Raccoon City Police Departments idealistic rookie cop from Resident Evil 2. It has been six years since the destruction of Raccoon City and in that time, the U.S. government has been able to destroy the nefarious Umbrella Corporation. Fast forward to 2004 and players rejoin Leon, who is now a U.S. agent with a top-secret mission. He has been tasked to look into the abduction of the Presidents daughter and his investigation has led him to a mysterious location in Europe. As Leon encounters unimaginable horrors, he must find out who or what is behind everything.',
          img: 'assets/img/RE4.JPG',
          lanzamiento: '2005-10-25',
          metascore: '96'
        },
        {
          compania: 'Play Station',
          consola: 'PlayStation 2',
          nombre: 'Fifa Soccer 2004',
          desarrollador: 'EA',
          genero: 'Sports',
          bio: 'A new Career Mode gives you the chance to take a team from the lower divisions, battle through ranks, sign new players, and turn them into champions. Take control of players away from the ball, and run them into space for attacking passes or gain valuable position during dead ball kicks. A fine-tuned game engine, and new animations dramatically enhance the smoothness in player movement. Deeper team AI, attributes, tactics, playing styles, control, and individual player personalities. Build your franchise and guide your club to the Championship by making calculated front-office decisions with Career Mode. When one season ends and another begins new challenges will present themselves.', 
          img: 'assets/img/FIFA2004.JPG',
          lanzamiento: '2003-11-04',
          metascore: '84'
        },
        {
          compania: 'Play Station',
          consola: 'PlayStation 2',
          nombre: 'Metal Gear Solid 3: Subsistence',
          desarrollador: 'Aspect',
          genero: 'Accion, Aventura',
          bio: 'Metal Gear goes online for the first time in Metal Gear Solid 3 Subsistence! Players can battle or team up with up to 7 other friends for online dominance. Featuring different gameplay modes, new camera system, and robust online play, Subsistence is the game that gives players a brand new Metal Gear experience. Includes MGS3 Snake Eater and all new Online Modes, including Death Match, Team Death Match, Sneaking Mission, Capture Mission, and Rescue Mission. Third Person Camera system gives players more control.',
          img: 'assets/img/MGS3.JPG',
          lanzamiento: '2006-03-14',
          metascore: '94'
        },
        {
          compania: 'Play Station',
          consola: 'PlayStation 2',
          nombre: 'Metal Gear Solid 2: Sons of Liberty',
          desarrollador: 'KCEJ',
          genero: 'Accion, Aventura',
          bio: 'Solid Snake returns in Metal Gear Solid 2: Substance, the expanded edition of Metal Gear Solid 2: Sons of Liberty with all-new game modes, hidden characters and storylines. Top-secret weapons technology is being mysteriously transported under cover of an oil tanker to an unknown destination. Its up to Snake to infiltrate the transport and keep this deadly weapon of mass destruction from falling into the wrong hands! Featuers 350+ VR Missions and 150+ Alternate Missions, as well as 5 all-new Snake Tales side stories.',
          img: 'assets/img/MGS2.JPG',
          lanzamiento: '2003-03-03',
          metascore: '87'
        },
        {
          compania: 'Play Station',
          consola: 'PlayStation 2',
          nombre: 'Contra Shattered Soldier',
          desarrollador: 'KCET',
          genero: 'Accion, Shooter, Aventura',
          bio: 'All of the legendary action and adrenaline of the famed Contra series comes to the PS2. Massive, screen-filling boss characters, a Contra series staple, do everything they can to keep players from proceeding through the multiple action-packed missions, while environmental threats such as swarms of bugs, aggressive enemies and alien encounters keep players on their toes. ',
          img: 'assets/img/ContraShatteredSoldier.JPG',
          lanzamiento: '2002-10-22',
          metascore: '78'
        },
        {
          compania: 'Play Station',
          consola: 'PlayStation 2',
          nombre: 'Mortal Kombat Deception',
          desarrollador: 'Midway',
          genero: 'Figthing',
          bio: 'Shocking and evil, Mortal Kombat: Deception pushes martial arts-style fighting and the Mortal Kombat franchise to new heights with an innovative fighting system, unparalleled depth and brutally intense action that will appeal to long-time Mortal Kombat fans as well as next-generation gamers. The game features lightning-fast hand-to-hand and special weapons combat, secret and returning characters, moves and combinations with new death-dealing battles and fatalities.',
          img: 'assets/img/MKDeception.JPG',
          lanzamiento: '2004-10-04',
          metascore: '81'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX',
          nombre: 'Mega Man Anniversary Collection',
          desarrollador: 'Atomic Planet Entertainment',
          genero: 'Action, Platformer',
          bio: 'For 15 years, Mega Man games have appeared on consoles, and now you can play ten of them on one disc. Mega Man Anniversary Collection includes the first eight Mega Man games plus two that were never-before-released in the U.S. See how Mega Man has crossed into other media by watching unlockable bonus features, including footage from the original Mega Man TV Series, over 30 original artwork selections, and remixed music tracks inspired by the series.',
          img: 'assets/img/MegamanAC.JPG',
          lanzamiento: '2005-03-15',
          metascore: '80'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX',
          nombre: 'Halo 2',
          desarrollador: 'Bungie',
          genero: 'FPS',
          bio: 'The Covenant alien race threatens to destroy all humankind, and the only thing standing in its way is Master Chief, a genetically enhanced supersoldier. Master Chief returns in Halo 2, which features new vehicles, weapons, environments, and more. This time, you can interact with your environment, wield two weapons at the same time, board opponents vehicles, and even switch sides to play the role of a Covenant Elite. ',
          img: 'assets/img/Halo2.JPG',
          lanzamiento: '2004-11-09',
          metascore: '95'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX 360',
          nombre: 'Halo Combat Evolved Anniversary',
          desarrollador: '343 Industries',
          genero: 'FPS',
          bio: 'Halo: Combat Evolved Anniversary is a spectacularly remastered version of the original Halo campaign, created in celebration of the 10th anniversary of one of the most beloved franchises in gaming history. With a bounty of new features including cooperative play over Xbox LIVE, a bundle of some of the most beloved multiplayer maps in Halo history reimagined for Xbox LIVE, new challenges and a new story to uncover. ',
          img: 'assets/img/HaloCEA.JPG',
          lanzamiento: '2011-11-15',
          metascore: '82'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX',
          nombre: 'Halo Combat Evolved',
          desarrollador: 'Bungie',
          genero: 'FPS',
          bio: 'Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankinds super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, youll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.',
          img: 'assets/img/HaloCombatEvolved.JPG',
          lanzamiento: '2001-11-14',
          metascore: '97'
        },
         {
          compania: 'Xbox',
          consola: 'XBOX 360',
          nombre: 'Halo 3 ODST',
          desarrollador: 'Bungie',
          genero: 'FPS',
          bio: 'Halo 3: ODST returns players to familiar ground on a vital, top-secret mission. The gripping story, cooperative campaign and new multiplayer content will have Halo fans Preparing to Drop. The new game brings the perspective of new characters to the Human-Covenant struggle, as it explores the ODST, or Orbital Drop Shock Troopers. Follow the story of the legendary ODSTs or Orbital Drop Shock Troopers as they drop into the ruined city of New Mombasa, looking for clues behind the Covenants catastrophic attack on the city. A new hero: Prepare to drop. Known for their courage, valor and at times, insanity, Orbital Drop Shock Troopers are among the fiercest UNSC soldiers, priding themselves on being the first unit deployed into hostile situations.',
          img: 'assets/img/Halo3ODST.JPG',
          lanzamiento: '2009-09-22',
          metascore: '83'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX 360',
          nombre: 'Halo Reach',
          desarrollador: 'Bungie',
          genero: 'FPS',
          bio: 'From the beginning, you know the end. In Halo: Reach, players experience the fateful moments that forged the Halo legend. Its the story of Noble Team, a squad of heroic Spartan soldiers, and their final stand on the planet Reach, humanitys last line of defense between the terrifying Covenant and Earth. This darker story is echoed by grittier visuals amid a backdrop of massive, awe-inspiring environments. Characters, enemies and environments are rendered in amazing detail by an all-new engine designed to deliver epic-scale encounters against the cunning and ruthless Covenant.',
          img: 'assets/img/HaloReach.JPG',
          lanzamiento: '2010-09-14',
          metascore: '91'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX 360',
          nombre: 'Halo 4',
          desarrollador: '343 Industries',
          genero: 'FPS',
          bio: 'Master Chief re-emerges to battle an ancient evil force determined to wreak vengeance and annihilation. Shipwrecked on a mysterious world, faced with new enemies and deadly technology, the universe wont ever be the same. Enlist aboard the Infinity to experience Halos original multiplayer (with up to three cohorts) and Spartan Ops - innovative episodic fiction-based co-op missions. Go Beyond the Story: Halo 4s Infinity Multiplayer features an expanded suite of multiplayer modes, weapons, vehicles, armor abilities, a new loadout and Spartan IV player progression system.',
          img: 'assets/img/Halo4.JPG',
          lanzamiento: '2012-11-06',
          metascore: '87'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX One',
          nombre: 'Halo: The Master Chief Collection',
          desarrollador: '343 Industries',
          genero: 'FPS',
          bio: ' The Master Chiefs complete story available one console. Features a re-mastered Halo 2: Anniversary, along with Halo: Combat Evolved Anniversary, Halo 3, and Halo 4, new digital series, Halo: Nightfall, and access to the Halo 5: Guardians Beta.',
          img: 'assets/img/HaloTMCC.JPG',
          lanzamiento: '2014-11-11',
          metascore: '85'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX 360',
          nombre: 'Gears of War',
          desarrollador: 'Epic Games',
          genero: 'Shooter',
          bio: ' Gears of War blends tactical action with survival horror and thrusts gamers into a deep and harrowing story of humankinds epic battle for survival against the Locust Horde, a nightmarish race of creatures that surface from the bowels of the planet. Lead war hero Marcus Fenix and his fire team as they face the onslaught of merciless warrior fiends. A revolutionary tactical combat system and breathtaking, high-definition visuals from the Unreal Engine 3 immerse you in a horrifying story of war and survival. A.I. teammates are indiscernable from human players. Voice recognition and real-time lip synching heighten the experience. The battlefield is a lethal place. ',
          img: 'assets/img/GearsOfWar.JPG',
          lanzamiento: '2006-11-07',
          metascore: '94'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX 360',
          nombre: 'Gears of War 2',
          desarrollador: 'Epic Games',
          genero: 'Shooter',
          bio: ' Gears of War 2 builds upon the gameplay of the first title in every way. First, the scope of the action is bigger: new characters, more weapons, nastier enemies, bigger vehicles, and grander locales offer more action, more emotion, and more thrills. Next, every major aspect of the game has been refined to create heightened, more immersive experiences. Finally, the overall tone of Gears of War 2 is more badass: replete with new weapon-specific executions, chainsaw duels, and shocking boss fights. Gears of War 2 raises the graphics bar for next-generation games through its breathtaking visual effects, which are made possible through advances in Unreal Engine 3. ',
          img: 'assets/img/GearsOfWar2.JPG',
          lanzamiento: '2008-11-07',
          metascore: '93'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX 360',
          nombre: 'Gears of War 3',
          desarrollador: 'Epic Games',
          genero: 'Shooter',
          bio: ' Developed by acclaimed studio Epic Games and available only on Xbox 360, Gears of War 3 plunges players into a harrowing tale of hope, survival, and brotherhood that will conclude the current story arc for Gears of War. With the last human city destroyed and the remaining survivors stranded, time is running out for Marcus and his comrades as they fight to save the human race from the jaws of extinction. ',
          img: 'assets/img/GearsOfWar3.JPG',
          lanzamiento: '2011-09-20',
          metascore: '93'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX One',
          nombre: 'Gears of War 4',
          desarrollador: 'The Coalition',
          genero: 'Shooter',
          bio: ' A new saga begins. After narrowly escaping an attack on their village, JD Fenix and his friends, Kait and Del, must rescue the ones they love and discover the source of a monstrous new enemy. Engage in a two-player co-op campaign with friends locally via split-screen, over Xbox Live or LAN. Player 2 can select either Kait or Del. Team up with four others and battle wave after wave of increasingly difficult enemies by choosing your combat class, leveling up your skills and deploying fortifications anywhere on the map. Compete online in new and favorite game types, all at 60fps on dedicated servers. A new visible ranking system means fairer matchmaking for social, competitive and professional players alike. [ ',
          img: 'assets/img/GearsOfWar4.JPG',
          lanzamiento: '2016-11-11',
          metascore: '84'
        },
        {
          compania: 'Xbox',
          consola: 'XBOX 360',
          nombre: 'Assassins Creed III',
          desarrollador: 'Ubisoft',
          genero: 'Action, Adventure',
          bio: ' Its 1775. The colonies are on the verge of revolt. Assume the role of Connor, an assassin sworn to achieve liberty for his people and his new nation. To accomplish this, you will pursue your enemies across an open world. You will utilize your killing power in a violent pursuit that will see you traverse chaotic city streets and blood-soaked battlefields in the dangerous American frontier and beyond. You will encounter legendary heroes of American history, and with them you will conspire to annihilate those who threaten to bring down Liberty itself. Assassins Creed 3.  ',
          img: 'assets/img/ACIII.JPG',
          lanzamiento: '2012-10-30',
          metascore: '84'
        },
        {
          compania: 'Play Station',
          consola: 'Play Station 4',
          nombre: 'Horizon Zero Dawn',
          desarrollador: 'Guerilla',
          genero: 'Role, Action RPG',
          bio: ' Horizon Zero Dawn is a PS4-exclusive action role playing game developed by Guerrilla Games, creators of the Killzone franchise. As Horizon Zero Dawn’s main protagonist Aloy, a skilled hunter, explore a vibrant and lush world inhabited by mysterious mechanized creatures. Embark on an emotional journey to unravel mysteries of tribal societies, ancient artifacts and advanced technologies that will determine the fate of this planet, and of life itself. ',
          img: 'assets/img/HorizonZeroDawn.JPG',
          lanzamiento: '2017-02-28',
          metascore: '89'
        },
        {
          compania: 'Play Station',
          consola: 'Play Station 4',
          nombre: 'Star Wars: Jedi Fallen Order',
          desarrollador: 'Respawn Entertainment',
          genero: 'Action',
          bio: '  A third-person action-adventure Star Wars title from Respawn Entertainment. The Empire seeks to eradicate all Jedi after the execution of Order 66. You, a Jedi Padawan-turned-fugitive, must fight for your survival as you explore the mysteries of a long-extinct civilization in hopes of rebuilding the Jedi Order. After narrowly escaping the Jedi purge, you’re on a quest to rebuild your fallen Order. Pick up the pieces of your shattered past and complete your Jedi training, all while staying one step ahead of the Empire and its deadly Inquisitors. Utilize your Jedi training to overcome your opponents and solve the mysteries that lay in your path. Use the Force to augment the way you explore, allowing you to traverse new paths and discover parts of locations you’ve been to before.',
          img: 'assets/img/JediFallenOrder.JPG',
          lanzamiento: '2019-11-15',
          metascore: '79'
        },
        {
          compania: 'Play Station',
          consola: 'Play Station 4',
          nombre: 'Crash Bandicoot Nsane Trilogy',
          desarrollador: 'Vicarius Visions',
          genero: 'Adventure, Platformer',
          bio: '  Your favorite marsupial, Crash Bandicoot, is back. Hes enhanced, entranced & ready-to-dance with the N. Sane Trilogy game collection. Now you can experience Crash Bandicoot like never before in Fur-K. Spin, jump, wump and repeat as you take on the epic challenges and adventures through the three games that started it all, Crash Bandicoot, Crash Bandicoot 2: Cortex Strikes Back and Crash Bandicoot: Warped. Relive all your favorite Crash moments in their fully-remastered HD graphical glory and get ready to put some UMPH in your WUMP. ',
          img: 'assets/img/CrashBandicootNsane.JPG',
          lanzamiento: '2017-06-30',
          metascore: '80'
        },
        {
          compania: 'Play Station',
          consola: 'Play Station 4',
          nombre: 'Gran Turismo Sport',
          desarrollador: 'Polyphony Digital',
          genero: 'Racing',
          bio: '  The latest instalment of the Gran Turismo franchise is coming to PlayStation4 with the name Gran Turismo SPORT. The graphics, sound and physics engine promise to be the most realistic ever experienced in a driving simulator thanks to the new platform and the new technologies, but that alone would be a too obvious improvement: the way driving games are played also promise to undergo a revolution with Gran Turismo SPORT. This is a vision that invokes the rebirth of motorsports. The major difference between real life motorsports and Gran Turismo SPORT is in the fact that anyone, from children to the elderly, can participate and enjoy racing. Even players who have never played driving games until now can discover how fun it is to drive. Whilst at the same time, it promises the depth and complexity to meet the expectations of the existing Gran Turismo fans. ',
          img: 'assets/img/GTS.JPG',
          lanzamiento: '2017-10-17',
          metascore: '75'
        },
        {
          compania: 'Play Station',
          consola: 'Play Station 4',
          nombre: 'Wild Guns Reloaded',
          desarrollador: 'Natsume Atari',
          genero: 'Action, Shooter',
          bio: '  In Wild Guns: Reloaded, Annie has tracked down the famed bounty hunter Clint to get revenge on the Kid gang. With eight stages, each with three zones, theres plenty of bad robots to blast away',
          img: 'assets/img/WildGunsReloaded.JPG',
          lanzamiento: '2018-04-17',
          metascore: '80'
        },
        {
          compania: 'Play Station',
          consola: 'Play Station 4',
          nombre: 'Metal Gear Solid V: The Panthyom Pain',
          desarrollador: 'Kojima Productions',
          genero: 'Action, Shooter',
          bio: '  Following the prologue METAL GEAR SOLID V: GROUND ZEROES, METAL GEAR SOLID V: THE PHANTOM PAIN concludes the METAL GEAR SOLID V experience by following the story of the protagonist of the series, Big Boss (a.k.a. Snake). The METAL GEAR SOLID V experience is Creator and Director Hideo Kojimas first time incorporating open world gameplay to the groundbreaking METAL GEAR franchise.',
          img: 'assets/img/MGSV.JPG',
          lanzamiento: '2015-09-01',
          metascore: '93'
        },
        {
          compania: 'Play Station',
          consola: 'Play Station 4',
          nombre: 'Destiny',
          desarrollador: 'Bungie',
          genero: 'Action, Shooter',
          bio: 'In Destiny (from the creators of Halo) you are a Guardian of the last city on Earth. You are able to wield incredible power. Explore the ancient ruins of our solar system, from the vast dunes of Mars to the lush jungles of Venus. Defeat Earth’s enemies. Reclaim all that we have lost. Become legend. Embark on an epic action adventure with rich cinematic storytelling where you unravel the mysteries of our universe and reclaim what we lost at the fall of our Golden Age. The next evolution of the first-person action genre that promises to provide an unprecedented combination of storytelling, cooperative, competitive, and public gameplay, and personal activities that are all woven into an expansive, persistent online world. ',
          img: 'assets/img/Destiny.JPG',
          lanzamiento: '2014-09-09',
          metascore: '76'
        },
        {
          compania: 'Play Station',
          consola: 'Play Station 4',
          nombre: 'Disney Infinity 3.0 edition',
          desarrollador: 'Avalanche Studios',
          genero: 'Action, Adventure',
          bio: 'Twilight of the Republic is an all-new, original chapter of the Star Wars Saga, set in the Episodes I-III timeline. Get ready to use the Force and Lightsabers in epic battles as Anakin Skywalker, Ahsoka Tano, Obi-Wan Kenobi, Yoda, and Darth Maul.',
          img: 'assets/img/DisneyInfinity.JPG',
          lanzamiento: '2015-08-30',
          metascore: '80'
        }
      ];

    constructor() {
        console.log('servicio listo para usarse');
    }

    getVideojuegos(){
        return this.videojuegos;
    }

    getVideojuego(idx: string){
      return this.videojuegos[idx];
    }
}

export interface Videojuego{
    consola: string;
    nombre: string;
    desarrollador: string;
    genero: string;
    bio: string;
    img: string;
    lanzamiento: string;
    metascore: string;
    compania: string;
}