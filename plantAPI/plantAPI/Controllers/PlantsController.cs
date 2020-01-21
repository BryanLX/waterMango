using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace plantAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlantsController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<PlantsController> _logger;

        public PlantsController(ILogger<PlantsController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public IEnumerable<PlantDetail> Get()
        {
            List<PlantDetail> plants = new List<PlantDetail>();
            plants.Add(new PlantDetail
            {
                category = "Shrubs",
                instructions = "Large double. Good grower, heavy bloomer. Early to mid-season, acid loving plants. Plant in moist well drained soil with pH of 4.0-5.5.",
                photo = "https://cdn.pixabay.com/photo/2019/04/25/04/51/azaleas-in-pink-4153924_960_720.jpg",
                name = "Azalea"
            });
            plants.Add(new PlantDetail
            {
                category = "Container Plants",
                instructions = "Blooms continuously from early spring to first frost. Full sun or part shade, moist well-drained soil.",
                photo = "https://upload.wikimedia.org/wikipedia/commons/6/67/Calibrachoanoamagenta.jpg",
                name = "Calibrachoa Noa"
            });
            plants.Add(new PlantDetail
            {
                category = "Herbaceous Perennials",
                instructions = "These plants are very hardy, easy to grow, and increase readily. Average flower size is 3-4 inches in diameter.",
                photo = "https://cdn.pixabay.com/photo/2019/05/09/15/02/iris-4191323_960_720.jpg",
                name = "Iris Sibirica"
            });
            plants.Add(new PlantDetail
            {
                category = "Cacti & Succulents",
                instructions = "Drought tolerant, well drained soil. Prefers full sun.",
                photo = "https://live.staticflickr.com/2762/4432258122_dfa480573b_b.jpg",
                name = "Aloe Vera"
            });
            plants.Add(new PlantDetail
            {
                category = "Cacti & Succulents",
                instructions = "Growing as a large roughly spherical globe, it may eventually reach over a meter in height after many years.",
                photo = "https://live.staticflickr.com/3263/3104098300_bef21f7a3e_z.jpg",
                name = "Echinocactus Grusonii"
            });
            return plants;
        }

    }
}
