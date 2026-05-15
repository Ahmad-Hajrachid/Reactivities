using System;
using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController() : BaseAPIController
{
    [HttpGet]
    public async Task<ActionResult<List<Domain.Activity>>> GetActivities(CancellationToken cancellationToken)
    {
        return await Mediator.Send(new GetActivityList.Query(), cancellationToken);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<Domain.Activity>> GetActivityDetails(string id)
    {
        return await Mediator.Send(new GetActivityDetails.Query { Id = id });
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(Domain.Activity activity)
    {
        return await Mediator.Send(new CreateActivity.Command { Activity = activity });
    }

    [HttpPut]
    public async Task<IActionResult> UpdateActivity ( Domain.Activity activity)
    {
        await Mediator.Send(new EditActivity.Command { Activity = activity });
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteActivity(string id)
    {
        await Mediator.Send(new DeleteActivity.Command {Id = id});
        return Ok();
    }
}
