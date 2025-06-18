import fs from 'fs'
import { DbContex } from '../db'
import { Region } from '../entitys/Region'
import { Station } from '../entitys/Station'
const api_key = process.env.API_KEY || 'API ключ яндекс расписания'
export class fetchModule {
    static async getStation() {
        const res = await fetch(`https://api.rasp.yandex.net/v3.0/stations_list/?apikey=${api_key}&lang=ru_RU&format=json`, {
            method: 'GET'
        })
        JSON.parse(await res.text()).countries[29].regions.map(async(x:any)=>{
            if(x.title == "Новосибирская область"){
                //console.log(x)
                const regionRepo = DbContex.getRepository(Region)
                const newRegion = regionRepo.create({code:x.codes.yandex_code,title:x.title})
                const savedRegion = await regionRepo.save(newRegion)
                x.settlements.map(async(y:any)=>{
                    y.stations.map(async(z:any)=>{
                        if(z.transport_type == 'train'){
                            //console.log(z)
                            const stationRepo = DbContex.getRepository(Station)
                            const newStation = stationRepo.create(
                                {
                                    direction:z.direction,
                                    code:z.codes.yandex_code,
                                    station_type:z.station_type,
                                    title:z.title,
                                    region:savedRegion
                                })
                            const savedStation = await stationRepo.save(newStation)
                        }
                    })
                })
            }
        })
        fs.writeFile(__dirname + '/result.json', JSON.stringify(res.body), () => {
            console.log('Записано')
        })

    }
}