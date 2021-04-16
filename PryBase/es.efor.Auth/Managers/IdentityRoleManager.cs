using es.efor.Auth.Models.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.Auth.Managers
{
    public class IdentityRoleManager<TRoleId, TRole> : RoleManager<TRole>
        where TRoleId : IEquatable<TRoleId>
        where TRole : Role<TRoleId>, new()
    {
        internal static DateTimeOffset? UpdateDatetime { get; set; }

        public IdentityRoleManager(
            IRoleStore<TRole> store,
            IEnumerable<IRoleValidator<TRole>> roleValidators,
            ILookupNormalizer keyNormalizer,
            IdentityErrorDescriber errors,
            ILogger<RoleManager<TRole>> logger)
            : base(store, roleValidators, keyNormalizer, errors, logger)
        {
            //if (RoleConcurrencies == null)
            if (UpdateDatetime == null)
            {
                UpdateConcurrencies();
            }
        }

        public virtual async Task<IEnumerable<TRole>> FindByIdAsync(IEnumerable<TRoleId> roleIds)
        {
            ThrowIfDisposed();
            roleIds = (roleIds ?? new TRoleId[] { }).Distinct();

            await Task.CompletedTask;
            return Roles.Where(r => roleIds.Contains(r.Id)).ToList();
        }
        public virtual async Task<TRole> FindByIdAsync(TRoleId roleId)
        {
            ThrowIfDisposed();
            return await FindByIdAsync(roleId.ToString()).ConfigureAwait(false);
        }
        public virtual async Task<Dictionary<TRoleId, IdentityResult>> UpdateAsync(IEnumerable<TRole> roles)
        {
            ThrowIfDisposed();

            roles = roles ?? Enumerable.Empty<TRole>();

            Dictionary<TRoleId, IdentityResult> result = new Dictionary<TRoleId, IdentityResult>();
            foreach (var r in roles)
            {
                result[r.Id] = await UpdateAsync(r).ConfigureAwait(false);
            }
            return result;
        }


        public virtual async Task<IList<Claim>> GetClaimsAsync(TRoleId roleId)
        {
            ThrowIfDisposed();

            var role = await FindByIdAsync(roleId);
            if (role == null) return null;

            return await base.GetClaimsAsync(role);
        }

        #region Overrides
        public override async Task<IdentityResult> CreateAsync(TRole role)
        {
            var res = await base.CreateAsync(role);
            if (res.Succeeded)
            {
                UpdateConcurrencies(role);
            }
            return res;
        }
        public override async Task<IdentityResult> UpdateAsync(TRole role)
        {
            var res = await base.UpdateAsync(role);
            if (res.Succeeded)
            {
                UpdateConcurrencies(role);
            }
            return res;
        }
        public override async Task UpdateNormalizedRoleNameAsync(TRole role)
        {
            await base.UpdateNormalizedRoleNameAsync(role);
            //UpdateConcurrencies(role);
        }
        public override async Task<IdentityResult> AddClaimAsync(TRole role, Claim claim)
        {
            var res = await base.AddClaimAsync(role, claim);
            if (res.Succeeded)
            {
                UpdateConcurrencies(role);
            }
            return res;
        }
        public override async Task<IdentityResult> RemoveClaimAsync(TRole role, Claim claim)
        {
            var res = await base.RemoveClaimAsync(role, claim);
            if (res.Succeeded)
            {
                UpdateConcurrencies(role);
            }
            return res;
        }
        public override async Task<IdentityResult> SetRoleNameAsync(TRole role, string name)
        {
            var res = await base.SetRoleNameAsync(role, name);
            if (res.Succeeded)
            {
                UpdateConcurrencies(role);
            }
            return res;
        }
        public override async Task<IdentityResult> DeleteAsync(TRole role)
        {
            var res = await base.DeleteAsync(role);
            if (res.Succeeded)
            {
                UpdateConcurrencies(new TRole());
            }
            return res;
        }
        #endregion


        private void UpdateConcurrencies()
        {
            UpdateDatetime = DateTimeOffset.Now;
            //RoleConcurrencies = Roles
            //    .ToList()
            //    .Select(r => new RoleManagerConcurrencyInfo(r))
            //    .ToDictionary(r => r.RoleName, r => r);
        }
        private void UpdateConcurrencies(TRole role)
        {
            UpdateDatetime = DateTimeOffset.Now;
            //if (!RoleConcurrencies.ContainsKey(role.Name))
            //{
            //    RoleConcurrencies[role.Name] = new RoleManagerConcurrencyInfo();
            //}

            //RoleConcurrencies[role.Name] = new RoleManagerConcurrencyInfo()
            //{
            //    Concurrency = role.ConcurrencyStamp,
            //    DateTime = DateTimeOffset.Now,
            //    RoleId = role.Id,
            //    RoleName = role.Name,
            //};
        }
    }
}
