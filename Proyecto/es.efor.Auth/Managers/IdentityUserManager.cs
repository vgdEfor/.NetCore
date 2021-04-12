using es.efor.Auth.Models.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.Auth.Managers
{
    public class IdentityUserManager<TUserId, TUser> : UserManager<TUser>
        where TUserId : IEquatable<TUserId>
        where TUser : User<TUserId>
    {
        public IdentityUserManager(
            IUserStore<TUser> store,
            IOptions<IdentityOptions> optionsAccessor,
            IPasswordHasher<TUser> passwordHasher,
            IEnumerable<IUserValidator<TUser>> userValidators, IEnumerable<IPasswordValidator<TUser>> passwordValidators,
            ILookupNormalizer keyNormalizer,
            IdentityErrorDescriber errors, IServiceProvider services,
            ILogger<UserManager<TUser>> logger)
            : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger) { }


        public virtual async Task<IEnumerable<TUser>> FindByIdAsync(IEnumerable<TUserId> userIds)
        {
            ThrowIfDisposed();
            userIds = (userIds ?? new TUserId[] { }).Distinct();

            await Task.CompletedTask;
            return Users.Where(u => userIds.Contains(u.Id)).ToList();
        }
        public virtual async Task<TUser> FindByIdAsync(TUserId userId)
        {
            ThrowIfDisposed();
            return await FindByIdAsync(userId.ToString()).ConfigureAwait(false);
        }
        public virtual async Task<Dictionary<TUserId, IdentityResult>> UpdateAsync(IEnumerable<TUser> users)
        {
            ThrowIfDisposed();

            users = users ?? new TUser[] { };
            Dictionary<TUserId, IdentityResult> result = new Dictionary<TUserId, IdentityResult>();
            foreach (var u in users)
            {
                result[u.Id] = await UpdateAsync(u);
            }
            return result;
        }

        public virtual async Task<bool> IsInAllRolesAsync(TUser user, IEnumerable<string> roles)
        {
            ThrowIfDisposed();

            roles = roles ?? new string[] { };

            bool isInRole = true;
            foreach (var r in roles)
            {
                if (!await IsInRoleAsync(user, r).ConfigureAwait(false))
                {
                    isInRole = false;
                    break;
                }
            }
            return isInRole;
        }
        public virtual async Task<bool> IsInAnyRoleAsync(TUser user, IEnumerable<string> roles)
        {
            ThrowIfDisposed();

            roles = roles ?? new string[] { };

            bool isInRole = false;
            foreach (var r in roles)
            {
                if (await IsInRoleAsync(user, r).ConfigureAwait(false))
                {
                    isInRole = true;
                    break;
                }
            }
            return isInRole;
        }
    }
}
